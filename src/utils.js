import fs from 'fs';

export const getFileContent = (filePath) => fs.readFileSync(filePath, 'utf-8');

export const getFileExtension = (filePath) => filePath.split('.').slice(-1)[0].toLowerCase();
