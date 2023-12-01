import fs from 'fs';


const compareFile = (filepath1, filepath2) => {
    const file1Data = JSON.parse(fs.readFileSync(filepath1));
    const file2Data = JSON.parse(fs.readFileSync(filepath2));
    console.log(file1Data);
    console.log(file2Data);
};

export {compareFile};