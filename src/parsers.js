// parseFile.js
import yaml from 'js-yaml';
import { getFileContent, getFileExtension } from './utils.js';

const parseFile = (filePath) => {
  const fileContent = getFileContent(filePath);
  const extension = getFileExtension(filePath);

  switch (extension) {
    case 'json':
      return JSON.parse(fileContent);
    case 'yaml':
    case 'yml':
      return yaml.load(fileContent);
    default:
      throw new Error(`Unsupported file format "${extension}".`);
  }
};

export default parseFile;
