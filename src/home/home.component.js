import template from './home.html!text';
import { CtrlBase } from '../lib/asd.js';
import { materializeRecordFromSchema } from './materializeRecord.js';

const SCHEMA_UI_ORIGIN = 'https://schema-ui-mf-remote.vercel.app';
const USERS_COLLECTION = SCHEMA_UI_ORIGIN + '/api/users';
const USERS_SCHEMA = USERS_COLLECTION + '/schema';

class HomeCtrl extends CtrlBase {
  constructor($timeout, $window) {
    super();
    this.$timeout = $timeout;
    this.$window = $window;
    this.title = 'User';
    this.schema = {};
    this.fields = [];
    this.record = null;
    this.loading = true;
    this.saving = false;
    this.error = '';
    this.status = '';
    this.unsubscribeHost = [];
    this.pendingHostRecord = null;
    this.load();
  }

  labelFor(key) {
    const field = this.schema[key] || {};
    if (typeof field.label === 'string' && field.label) {
      return field.label;
    }
    return key
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/^./, (c) => c.toUpperCase());
  }

  applyHostRecord(payload) {
    if (payload && payload.entity && payload.entity !== 'users') {
      return;
    }
    const record = payload && payload.record ? payload.record : payload;
    if (!record || typeof record !== 'object') {
      this.load();
      return;
    }
    this.$timeout(() => {
      if (!this.fields.length) {
        this.pendingHostRecord = record;
        return;
      }
      this.record = materializeRecordFromSchema(this.schema, record);
      this.error = '';
      this.status = '';
    });
  }

  $onInit() {
    if (!this.$window.desktopUi || typeof this.$window.desktopUi.on !== 'function') {
      return;
    }
    this.$window.desktopUi.ready();
    ['userUpdated', 'dashboardSync'].forEach((name) => {
      this.unsubscribeHost.push(
        this.$window.desktopUi.on(name, (payload) => this.applyHostRecord(payload))
      );
    });
  }

  $onDestroy() {
    this.unsubscribeHost.forEach((off) => off && off());
    this.unsubscribeHost = [];
  }

  load() {
    this.loading = true;
    this.error = '';

    Promise.all([
      fetch(USERS_SCHEMA, { cache: 'no-store' }).then((res) => {
        if (!res.ok) {
          throw new Error('Schema could not be loaded');
        }
        return res.json();
      }),
      fetch(USERS_COLLECTION, { cache: 'no-store' }).then((res) => {
        if (!res.ok) {
          throw new Error('Users could not be loaded');
        }
        return res.json();
      })
    ])
      .then(([schema, users]) => {
        this.$timeout(() => {
          this.schema = schema;
          this.fields = Object.keys(schema);
          const source = this.pendingHostRecord
            || (Array.isArray(users) ? users[0] : users);
          this.pendingHostRecord = null;
          this.record = materializeRecordFromSchema(schema, source);
          this.loading = false;
        });
      })
      .catch((err) => {
        this.$timeout(() => {
          this.loading = false;
          this.error = err && err.message ? err.message : 'Could not load user';
        });
      });
  }

  submit() {
    if (!this.record || !this.record._id) {
      return;
    }

    this.saving = true;
    this.status = '';
    this.error = '';
    const record = materializeRecordFromSchema(this.schema, this.record);
    const url = USERS_COLLECTION + '/' + encodeURIComponent(record._id);

    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(record),
      cache: 'no-store'
    })
      .then(() => {
        if (this.$window.desktopUi) {
          this.$window.desktopUi.emit('userUpdated', {
            entity: 'users',
            record: record
          });
          this.$window.desktopUi.setTitle(record.username || 'User');
        }
        this.$timeout(() => {
          this.saving = false;
          this.status = 'Dashboard synced';
        });
      })
      .catch((err) => {
        this.$timeout(() => {
          this.saving = false;
          this.error = err && err.message ? err.message : 'Update failed';
        });
      });
  }
}

HomeCtrl.$inject = ['$timeout', '$window'];

export const HomeComponent = {
  template,
  controller: HomeCtrl
};
