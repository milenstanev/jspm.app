/**
 * Schema as design: a record is a projection of /api/<entity>/schema.
 * Source data may fill slots the schema named. It must not invent keys.
 */
export function materializeRecordFromSchema(schema, source) {
  const record = {};
  const existing = source && typeof source === 'object' ? source : {};

  if (typeof existing._id === 'string' && existing._id.length > 0) {
    record._id = existing._id;
  }

  Object.keys(schema || {}).forEach((key) => {
    const field = schema[key] || {};
    if (existing[key] !== undefined) {
      record[key] = existing[key];
      return;
    }
    if (field.default !== undefined) {
      record[key] = field.default;
      return;
    }
    if (field.formType === 'checkbox') {
      record[key] = false;
      return;
    }
    record[key] = '';
  });

  return record;
}
