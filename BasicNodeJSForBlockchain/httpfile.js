const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        const read = fs.createReadStream('./serverReq/kali.png');
        res.writeHead(200, { 'ContanType': 'image/png' });
        read.pipe(res);
    }
    else {
        res.write('Hey Your Enter in Wrong Palce ');
        res.end();
    }
})

server.listen('3000');