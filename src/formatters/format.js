import stylishTreeFormat from './stylish.js';
import plainFormatter from './plain.js';
import formatJson from './json.js';

const getFormatter = (formatName) => {
  let selectedFormatter;

  switch (formatName) {
    case 'stylish':
      selectedFormatter = stylishTreeFormat;
      break;
    case 'plain':
      selectedFormatter = plainFormatter;
      break;
    case 'json':
      selectedFormatter = formatJson;
      break;
    default:
      throw new Error(`Unsupported format: ${formatName}`);
  }

  return selectedFormatter;
};

export default getFormatter;
