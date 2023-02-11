// create web server  with nodeTest.js

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('hello this node server http');
        
    res.end();
    } else {
        res.write('wrong urr...');
        // this line for backe respon .. dont forget this 
        res.end();
    }
})

server.listen('3000');

 