import { fileURLToPath } from 'url';
import * as path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';
import parseFile from '../src/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '_fixtures_', filename);

const getExpectedResultFilename = (file1, file2, outputFormat) => {
  const extension = outputFormat === 'json' ? 'json' : 'txt';
  return `${outputFormat}_result.${extension}`;
};

const getExpectedResult = (file1, file2, outputFormat) => {
  const expectedResultFilename = getExpectedResultFilename(file1, file2, outputFormat);
  return fs.readFileSync(getFixturePath(expectedResultFilename), 'utf-8');
};

const formats = ['stylish', 'plain', 'json'];
const fileFormats = ['json', 'yml'];

describe.each(formats)('genDiff with format %s', (outputFormat) => {
  describe.each(fileFormats)('genDiff with file format %s', (fileFormat) => {
    test.each([
      ['file1', 'file2'],
    ])('should generate diff with %s.%s and format %s', (file1, file2) => {
      const filepath1 = getFixturePath(`${file1}.${fileFormat}`);
      const filepath2 = getFixturePath(`${file2}.${fileFormat}`);
      const expectedResult = getExpectedResult(file1, file2, outputFormat);

      expect(genDiff(filepath1, filepath2, outputFormat, parseFile)).toEqual(expectedResult);
    });
  });
});
