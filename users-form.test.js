const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  USERS_SCHEMA,
  materializeRecord,
  buildFormHtml,
  readFormValues,
} = require('./users-form.lib.js');

const schema = {
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

test('uses the schema-ui users schema keys, not a todo list', () => {
  assert.deepEqual(Object.keys(USERS_SCHEMA), [
    'username',
    'mobileNumber',
    'OtherNewProp',
    'LastBoolean',
    'selectItem',
    'phone',
  ]);
  const html = buildFormHtml(USERS_SCHEMA, materializeRecord(USERS_SCHEMA, {}));
  assert.equal(html.includes('list-group-item'), false);
  assert.equal(html.includes('remove'), false);
  assert.equal(html.includes('btn btn-primary'), true);
  assert.equal(html.includes('form-control'), true);
  assert.equal(html.includes('form-group'), true);
  assert.equal(html.includes('Update user'), true);
});

test('projects defaults from the schema then fills fetched user slots', () => {
  assert.deepEqual(materializeRecord(schema, {}), {
    username: '',
    mobileNumber: '',
    OtherNewProp: false,
    LastBoolean: true,
    selectItem: 1,
    phone: '',
  });
  assert.deepEqual(
    materializeRecord(schema, {
      _id: 'user-demo',
      username: 'demo',
      mystery: 'ignored',
    }),
    {
      _id: 'user-demo',
      username: 'demo',
      mobileNumber: '',
      OtherNewProp: false,
      LastBoolean: true,
      selectItem: 1,
      phone: '',
    }
  );
});

test('renders bootstrap 3 controls for text, checkbox, and select', () => {
  const html = buildFormHtml(
    schema,
    materializeRecord(schema, { username: 'mstanev', selectItem: 3 })
  );
  assert.equal(html.includes('id="field-username"'), true);
  assert.equal(html.includes('class="form-control"'), true);
  assert.equal(html.includes('class="checkbox"'), true);
  assert.equal(html.includes('type="checkbox"'), true);
  assert.equal(html.includes('<select class="form-control"'), true);
  assert.equal(html.includes('value="3" selected'), true);
  assert.equal(html.includes('value="mstanev"'), true);
});

test('reads submitted values back into a record for the SDK', () => {
  const record = readFormValues(
    schema,
    { _id: 'user-demo' },
    {
      'field-username': { value: 'mstanev' },
      'field-mobileNumber': { value: '5559999' },
      'field-OtherNewProp': { checked: true },
      'field-LastBoolean': { checked: true },
      'field-selectItem': { value: '2' },
      'field-phone': { value: '555-999-0000' },
    }
  );
  assert.deepEqual(record, {
    _id: 'user-demo',
    username: 'mstanev',
    mobileNumber: '5559999',
    OtherNewProp: true,
    LastBoolean: true,
    selectItem: 2,
    phone: '555-999-0000',
  });
});
