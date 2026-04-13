import fs from 'fs';

const data = fs.readFileSync('./article.txt', 'utf8');

const charCount = data.length;

console.log(`The file contains ${charCount} characters`);