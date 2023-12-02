import fs from 'fs';
import _ from 'lodash'

const compareFile = (filepath1, filepath2) => {
    const file1Data = JSON.parse(fs.readFileSync(filepath1));
    const file2Data = JSON.parse(fs.readFileSync(filepath2));
    console.log(file1Data);
    console.log(file2Data);
};

const genDiff = (obj1, obj2) => {
  const file1Data = JSON.parse(fs.readFileSync(obj1));
  const file2Data = JSON.parse(fs.readFileSync(obj2));
  let keys = _.union(_.keys(file1Data), _.keys(file2Data));
  keys.sort()
  let result = keys.map(key => {
    if (_.has(file1Data, key) && !_.has(file2Data, key)) {
      return `- ${key}: ${file1Data[key]}`;
    } else if (!_.has(file1Data, key) && _.has(file2Data, key)) {
      return `+ ${key}: ${file2Data[key]}`;
    } else if (_.isEqual(file1Data[key], file2Data[key])) {
      return `  ${key}: ${file1Data[key]}`;
    } else {
      return `- ${key}: ${file1Data[key]}\n+ ${key}: ${file2Data[key]}`;
    }
  });
    
  return `{\n${result.join('\n')}\n}`;
};

export {compareFile, genDiff};