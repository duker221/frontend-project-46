import _ from 'lodash';

const formatValue = (value) => {
  if (value === null) {
    return 'null';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  return value;
};

const plainFormatter = (diff, parentKey = '') => {
  const formattedDifferences = diff.map((node) => {
    const currentKey = parentKey ? `${parentKey}.${node.key}` : node.key;

    switch (node.type) {
      case 'added':
        return `Property '${currentKey}' was added with value: ${formatValue(node.value)}`;
      case 'removed':
        return `Property '${currentKey}' was removed`;
      case 'changed':
        return `Property '${currentKey}' was updated. From ${formatValue(node.value1)} to ${formatValue(node.value2)}`;
      case 'nested':
        return plainFormatter(node.children, currentKey);
      default:
        return '';
    }
  });

  return formattedDifferences.filter((line) => line !== '').join('\n');
};

export default plainFormatter;
