import fs from 'fs';
function changeFile(fileName, replaced, changing) {
    const data = fs.readFileSync(fileName, 'utf8');
    const change = data.replaceAll(replaced, changing);
    const info = fs.writeFileSync(fileName, change);
}
changeFile('./src/log.txt', 'Script', 'Сode'); 
