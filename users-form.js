(function (global) {
  var API = 'https://schema-ui-mf-remote.vercel.app/api/users';
  var lib = global.UsersFormLib;
  var host = document.getElementById('users-schema-form');
  if (!host || !lib) {
    return;
  }

  function isOtherFeature() {
    return /\/(counter|timer|notes)/.test(global.location.hash);
  }

  function showHost() {
    host.style.display = isOtherFeature() ? 'none' : 'block';
  }

  function readDomForm(schema, current) {
    var fields = {};
    Object.keys(schema).forEach(function (key) {
      var el = document.getElementById('field-' + key);
      if (el) {
        fields['field-' + key] = el;
      }
    });
    return lib.readFormValues(schema, current, fields);
  }

  function render(schema, record, status) {
    host.innerHTML = lib.buildFormHtml(schema, record, status);
    document
      .getElementById('users-schema-form-el')
      .addEventListener('submit', function (ev) {
        ev.preventDefault();
        var next = readDomForm(schema, record);
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
                  lib.escapeAttr(err.message || 'Update failed') +
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
      var schema = pair[0] && Object.keys(pair[0]).length ? pair[0] : lib.USERS_SCHEMA;
      var users = pair[1];
      var source = Array.isArray(users) ? users[0] : users;
      render(schema, lib.materializeRecord(schema, source));
      if (global.desktopUi) {
        global.desktopUi.ready();
      }
    })
    .catch(function (err) {
      host.innerHTML =
        '<div class="panel-body"><p class="text-danger" role="alert">' +
        lib.escapeAttr(err.message || 'Could not load users schema') +
        '</p></div>';
    });

  showHost();
  global.addEventListener('hashchange', showHost);
})(window);
