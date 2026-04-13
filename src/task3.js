import fs from 'fs';
function changeFile(fileName, replaced, changing) {
   fs.readFile(fileName, 'utf8', (err,data) => {
      if (err) {
        console.error(err)
        return;
    }
    const change = data.replaceAll(replaced, changing);
    const info = fs.writeFileSync(fileName, change);
   });
}
changeFile('./src/log.txt', 'Script', 'Code'); 
