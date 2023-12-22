import parseFile from './parsers.js';
import stylishTreeFormat from './formatters/stylish.js';
import buildDiff from './buildDifferenceTree.js';
import getFormatter from './formatters/format.js';

const genDiff = (filePath1, filePath2, formatter = 'stylish') => {
  const file1Data = parseFile(filePath1);
  const file2Data = parseFile(filePath2);

  const diff = buildDiff(file1Data, file2Data);
  const formatType = getFormatter(formatter);

  const result = formatType(diff);
  return result;
};

export default genDiff;
