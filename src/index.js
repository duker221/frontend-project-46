import parseFile from './parsers.js';
import buildDiff from './buildDifferenceTree.js';
import getFormatter from './formatters/format.js';
import fs from 'fs';

export const getFileContent = (filePath) => fs.readFileSync(filePath, 'utf-8');

export const getFileExtension = (filePath) => filePath.split('.').slice(-1)[0].toLowerCase();


const genDiff = (filePath1, filePath2, formatter = 'stylish') => {

  const file1Data = parseFile(getFileContent(filePath1), getFileExtension(filePath1));
  const file2Data = parseFile(getFileContent(filePath2), getFileExtension(filePath2));

  const diff = buildDiff(file1Data, file2Data);
  const formatType = getFormatter(formatter);

  const result = formatType(diff);
  return result;
};

export default genDiff;
