(function (global) {
  var API = 'https://schema-ui-mf-remote.vercel.app/api/users';
  var host = document.getElementById('users-schema-form');
  if (!host) {
    return;
  }

  function isOtherFeature() {
    return /\/(counter|timer|notes)/.test(global.location.hash);
  }

  function showHost() {
    host.style.display = isOtherFeature() ? 'none' : 'block';
  }

  function escapeAttr(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;');
  }

  function fieldInput(key, field, value) {
    var id = 'field-' + key;
    var type = field.formType || 'text';
    if (type === 'select') {
      var opts = (field.options || [])
        .map(function (opt) {
          var selected = String(opt.val) === String(value) ? ' selected' : '';
          return (
            '<option value="' +
            escapeAttr(opt.val) +
            '"' +
            selected +
            '>' +
            escapeAttr(opt.text || opt.val) +
            '</option>'
          );
        })
        .join('');
      return (
        '<select class="form-control" id="' +
        id +
        '" name="' +
        key +
        '">' +
        opts +
        '</select>'
      );
    }
    if (type === 'checkbox') {
      var checked = value ? ' checked' : '';
      return (
        '<div class="checkbox"><label><input type="checkbox" id="' +
        id +
        '" name="' +
        key +
        '"' +
        checked +
        '> ' +
        escapeAttr(key) +
        '</label></div>'
      );
    }
    return (
      '<input type="text" class="form-control" id="' +
      id +
      '" name="' +
      key +
      '" value="' +
      escapeAttr(value) +
      '">'
    );
  }

  function materialize(schema, source) {
    var record = {};
    source = source || {};
    if (source._id) {
      record._id = source._id;
    }
    Object.keys(schema).forEach(function (key) {
      var field = schema[key] || {};
      if (source[key] !== undefined) {
        record[key] = source[key];
      } else if (field.default !== undefined) {
        record[key] = field.default;
      } else if (field.formType === 'checkbox') {
        record[key] = false;
      } else {
        record[key] = '';
      }
    });
    return record;
  }

  function readForm(schema, current) {
    var record = materialize(schema, current);
    Object.keys(schema).forEach(function (key) {
      var el = document.getElementById('field-' + key);
      if (!el) {
        return;
      }
      if (schema[key].formType === 'checkbox') {
        record[key] = el.checked;
      } else if (schema[key].formType === 'select') {
        var numeric = Number(el.value);
        record[key] = String(numeric) === el.value ? numeric : el.value;
      } else {
        record[key] = el.value;
      }
    });
    return record;
  }

  function render(schema, record, status) {
    var fields = Object.keys(schema)
      .map(function (key) {
        var field = schema[key] || {};
        var label =
          field.formType === 'checkbox'
            ? ''
            : '<label class="control-label" for="field-' +
              key +
              '">' +
              escapeAttr(key) +
              '</label>';
        return (
          '<div class="form-group">' +
          label +
          fieldInput(key, field, record[key]) +
          '</div>'
        );
      })
      .join('');
    host.innerHTML =
      '<div class="panel-heading"><h1 class="panel-title">User</h1></div>' +
      '<div class="panel-body">' +
      (status
        ? '<p class="text-success" role="status">' + escapeAttr(status) + '</p>'
        : '') +
      '<form id="users-schema-form-el" novalidate>' +
      fields +
      '<button type="submit" class="btn btn-primary">Update user</button></form></div>';
    document
      .getElementById('users-schema-form-el')
      .addEventListener('submit', function (ev) {
        ev.preventDefault();
        var next = readForm(schema, record);
        fetch(API + '/' + encodeURIComponent(next._id), {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(next),
          cache: 'no-store',
        })
          .then(function () {
            if (global.desktopUi) {
              global.desktopUi.emit('userUpdated', {
                entity: 'users',
                record: next,
              });
              global.desktopUi.setTitle(next.username || 'User');
            }
            record = next;
            render(schema, record, 'Dashboard synced');
          })
          .catch(function (err) {
            render(schema, record);
            host
              .querySelector('.panel-body')
              .insertAdjacentHTML(
                'afterbegin',
                '<p class="text-danger" role="alert">' +
                  escapeAttr(err.message || 'Update failed') +
                  '</p>'
              );
          });
      });
  }

  host.innerHTML =
    '<div class="panel-body"><p class="text-muted">Loading schema…</p></div>';

  Promise.all([
    fetch(API + '/schema', { cache: 'no-store' }).then(function (res) {
      if (!res.ok) {
        throw new Error('Schema could not be loaded');
      }
      return res.json();
    }),
    fetch(API, { cache: 'no-store' }).then(function (res) {
      if (!res.ok) {
        throw new Error('Users could not be loaded');
      }
      return res.json();
    }),
  ])
    .then(function (pair) {
      var schema = pair[0];
      var users = pair[1];
      var source = Array.isArray(users) ? users[0] : users;
      render(schema, materialize(schema, source));
      if (global.desktopUi) {
        global.desktopUi.ready();
      }
    })
    .catch(function (err) {
      host.innerHTML =
        '<div class="panel-body"><p class="text-danger" role="alert">' +
        escapeAttr(err.message || 'Could not load users schema') +
        '</p></div>';
    });

  showHost();
  global.addEventListener('hashchange', showHost);
})(window);
