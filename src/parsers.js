import fs from 'fs';
import yaml from 'js-yaml';

const getFileExtension = (filePath) => {
  return filePath.split('.').slice(-1)[0].toLowerCase();
};

const parseFile = (filePath) => {

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const extension = getFileExtension(filePath);

  switch (extension) {
    case 'json':
      return JSON.parse(fileContent);
    case 'yaml':
    case 'yml':
      return yaml.load(fileContent);
    default:
      throw new Error(`Unsupported file format: ${extension}`);
  }
};

export default parseFile;
