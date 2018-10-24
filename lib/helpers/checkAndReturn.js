

module.exports = function checkAndReturn(data, field, options = {}) {

  const { length, asBoolean } = options;
  if (asBoolean && typeof data[field] !== 'boolean') return false;
  if (asBoolean) return Boolean(data[field]);
  if (typeof data[field] !== 'string') return false;
  if (data[field].trim().length === 0) return false;
  if (length && data[field].trim().length !== length) return false;
  return data[field].trim();

};

