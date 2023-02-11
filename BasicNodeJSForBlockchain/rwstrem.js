//its can read and write file in chunks . so larg file can esily readable

const fs = require('fs');
const readfile = fs.createReadStream('./new/read.txt', 'utf8');
const writefile = fs.createWriteStream('./new/read2.txt');
readfile.on('data', (file) => {
    console.log('file succfully writed');
    writefile.write(file);
})