import stylishTreeFormat from './stylish.js';
import plainFormatter from './plain.js';
import formatJson from './json.js';

const formatters = {
  stylish: stylishTreeFormat,
  plain: plainFormatter,
  json: formatJson,
};

const getFormatter = (formatName) => {
  const selectedFormatter = formatters[formatName];
  if (!selectedFormatter) {
    throw new Error(`Unsupported format: ${formatName}`);
  }
  return selectedFormatter;
};

export default getFormatter;
