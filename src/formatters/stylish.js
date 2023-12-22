import _ from 'lodash';

const symbols = {
  added: '+',
  removed: '-',
  unchanged: ' ',
  nested: ' ',
};

const space = ' ';
const indentationsSpaces = 4;
const leftShiftsSpaces = 2;

const makeIndent = (depth) => space.repeat((depth * indentationsSpaces) - leftShiftsSpaces);

const stringify = (value, depth = 1) => {
  if (!_.isPlainObject(value)) {
    return String(value);
  }

  const keys = Object.keys(value).map(
    (key) => `${makeIndent(depth + 1)}  ${key}: ${stringify(value[key], depth + 1)}`,
  );

  return `{\n${keys.join('\n')}\n  ${makeIndent(depth)}}`;
};

export const stylishTree = (tree, depth = 1) => {
  switch (tree.type) {
    case 'added':
    case 'removed':
    case 'unchanged':
      return `${makeIndent(depth)}${symbols[tree.type]} ${
        tree.key
      }: ${stringify(tree.value, depth)}`;
    case 'changed':
      return `${makeIndent(depth)}${symbols.removed} ${
        tree.key
      }: ${stringify(tree.value1, depth)}\n${makeIndent(depth)}${
        symbols.added
      } ${tree.key}: ${stringify(tree.value2, depth)}`;
    case 'nested':
      return `${makeIndent(depth)}  ${tree.key}: {\n${tree.children
        .map((val) => stylishTree(val, depth + 1))
        .join('\n')}\n ${makeIndent(depth)} }`;
    default:
      throw new Error(`Unknown type: ${tree.type}`);
  }
};


export default (data) => {
  const result = data.map((tree) => stylishTree(tree, 1));
  return `{\n${result.join('\n')}\n}`;
};
