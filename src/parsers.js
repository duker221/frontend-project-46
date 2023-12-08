import fs from 'fs';
import yaml from 'js-yaml';

const parseFile = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const extension = filePath.split('.').pop().toLowerCase();

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
