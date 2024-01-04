import { fileURLToPath } from 'url';
import * as path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';
import parseFile from '../src/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const getExpectedResultFilename = (outputFormat) => `${outputFormat}_result.txt`;

const getExpectedResult = (file1, file2, outputFormat) => {
  const expectedResultFilename = getExpectedResultFilename(outputFormat);
  return fs.readFileSync(getFixturePath(expectedResultFilename), 'utf-8');
};

const fileFormats = ['json', 'yml'];
const outputFormats = ['stylish', 'plain', 'json'];

describe.each(fileFormats)('genDiff with file format %s', (fileFormat) => {
  test.each(outputFormats)('should generate diff for %s files with %s format', (outputFormat) => {
    const filepath1 = getFixturePath(`file1.${fileFormat}`);
    const filepath2 = getFixturePath(`file2.${fileFormat}`);
    const expectedResult = getExpectedResult('file1', 'file2', outputFormat);

    expect(genDiff(filepath1, filepath2, outputFormat, parseFile)).toEqual(expectedResult);
  });
});
