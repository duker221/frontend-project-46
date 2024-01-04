import stylishTreeFormat from './stylish.js';
import plainFormatter from './plain.js';
import formatJson from './json.js';

const getFormatter = (formatName) => {

  switch (formatName) {
    case 'stylish':
      return stylishTreeFormat;
    case 'plain':
      return plainFormatter;
    case 'json':
      return formatJson;
    default:
      throw new Error(`Unsupported format: ${formatName}`);
  }
};

export default getFormatter;
