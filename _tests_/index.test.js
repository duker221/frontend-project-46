import { fileURLToPath } from 'url';
import * as path from 'path';
import { genDiff } from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('Compares two configuration files and shows a difference', () => {
    const obj1 = path.join(__dirname, '_fixtures_', 'file1.json');
    const obj2 = path.join(__dirname, '_fixtures_', 'file2.json');

    const expectedDiff = '{\n- follow: false\n  host: hexlet.io\n- proxy: 123.234.53.22\n- timeout: 50\n+ timeout: 20\n+ verbose: true\n}';

    const actualDiff = genDiff(obj1, obj2);

    expect(actualDiff).toEqual(expectedDiff);
});