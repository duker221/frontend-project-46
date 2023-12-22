import _ from 'lodash';

const createUniqueKeys = (before, after) => _.uniq([...Object.keys(before), ...Object.keys(after)]);

const buildDiff = (before, after) => {
  const keys = _.sortBy(createUniqueKeys(before, after));

  const result = keys.map((key) => {
    if (_.isPlainObject(before[key]) && _.isPlainObject(after[key])) {
      return { type: 'nested', key, children: buildDiff(before[key], after[key]) };
    }

    if (!_.has(before, key)) {
      return { type: 'added', key, value: after[key] };
    }

    if (!_.has(after, key)) {
      return { type: 'removed', key, value: before[key] };
    }

    if (!_.isEqual(before[key], after[key])) {
      return {
        type: 'changed', key, value1: before[key], value2: after[key],
      };
    }

    return { key, value: before[key], type: 'unchanged' };
  });

  return result;
};

export default buildDiff;
