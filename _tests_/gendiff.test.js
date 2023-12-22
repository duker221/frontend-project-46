import { fileURLToPath } from 'url';
import * as path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';
import parseFile from '../src/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '_fixtures_', filename);
const getExpectedResult = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('genDiff', () => {
  test.each([
    ['file1.json', 'file2.json', 'stylish', 'stylish_result.txt'],
    ['file1.json', 'file2.json', 'plain', 'plain_result.txt'],
    ['file1.yaml', 'file2.yaml', 'stylish', 'stylish_result.txt'],
    ['file1.yaml', 'file2.yaml', 'plain', 'plain_result.txt'],
    ['file1.json', 'file2.json', 'json', 'json_result.json'],
    ['file1.yaml', 'file2.yaml', 'json', 'json_result.json'],
  ])('should generate diff with %s, %s and format %s', (file1, file2, format, expectedResultFile) => {
    const filepath1 = getFixturePath(file1);
    const filepath2 = getFixturePath(file2);
    const expectedResult = getExpectedResult(expectedResultFile);

    expect(genDiff(filepath1, filepath2, format, parseFile)).toEqual(expectedResult);
  });
});
