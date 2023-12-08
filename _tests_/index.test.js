import { fileURLToPath } from 'url';
import * as path from 'path';
import { genDiff } from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('Compares two JSON files and shows a difference', () => {
  const obj1Json = path.join(__dirname, '..', '_fixtures_', 'file1.json');
  const obj2Json = path.join(__dirname, '..', '_fixtures_', 'file2.json');

  const expectedDiff = '{\n- follow: false\n  host: hexlet.io\n- proxy: 123.234.53.22\n- timeout: 50\n+ timeout: 20\n+ verbose: true\n}';

  const actualDiff = genDiff(obj1Json, obj2Json);

  expect(actualDiff).toEqual(expectedDiff);
});

test('compares two YAML files and shows a difference', () => {
  const obj1Yaml = path.join(__dirname, '..', '_fixtures_', 'file1.yaml');
  const obj2Yaml = path.join(__dirname, '..', '_fixtures_', 'file2.yaml');

  const expectedDiff = '{\n- follow: false\n  host: hexlet.io\n- proxy: 123.234.53.22\n- timeout: 50\n+ timeout: 20\n+ verbose: true\n}';

  const actualDiff = genDiff(obj1Yaml, obj2Yaml);

  expect(actualDiff).toEqual(expectedDiff);
});
