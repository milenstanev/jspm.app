(function (root) {
  var USERS_SCHEMA = {
    username: { formType: 'text', required: [true, 'Field is Required'] },
    mobileNumber: { formType: 'text' },
    OtherNewProp: { formType: 'checkbox', default: false },
    LastBoolean: { formType: 'checkbox', default: true },
    selectItem: {
      default: 1,
      formType: 'select',
      options: [
        { val: 1, text: '--' },
        { val: 2, text: 'option' },
        { val: 3, text: 'third' },
      ],
    },
    phone: { formType: 'text' },
  };

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

  function materializeRecord(schema, source) {
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

  function buildFormHtml(schema, record, status) {
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
    return (
      '<div class="panel-heading"><h1 class="panel-title">User</h1></div>' +
      '<div class="panel-body">' +
      (status
        ? '<p class="text-success" role="status">' + escapeAttr(status) + '</p>'
        : '') +
      '<form id="users-schema-form-el" novalidate>' +
      fields +
      '<button type="submit" class="btn btn-primary">Update user</button></form></div>'
    );
  }

  function readFormValues(schema, current, fields) {
    var record = materializeRecord(schema, current);
    Object.keys(schema).forEach(function (key) {
      var el = fields['field-' + key];
      if (!el) {
        return;
      }
      if (schema[key].formType === 'checkbox') {
        record[key] = Boolean(el.checked);
      } else if (schema[key].formType === 'select') {
        var numeric = Number(el.value);
        record[key] = String(numeric) === el.value ? numeric : el.value;
      } else {
        record[key] = el.value;
      }
    });
    return record;
  }

  var api = {
    USERS_SCHEMA: USERS_SCHEMA,
    escapeAttr: escapeAttr,
    fieldInput: fieldInput,
    materializeRecord: materializeRecord,
    buildFormHtml: buildFormHtml,
    readFormValues: readFormValues,
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  } else {
    root.UsersFormLib = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
