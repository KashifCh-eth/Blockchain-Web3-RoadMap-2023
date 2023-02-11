// pipe for easy read and write big files 
// zlib moudle compressd and uncompressed for files 

var zlib = require('zlib');
var fs = require('fs');

// var gunzip = zlib.createGunzip();
var gzip = zlib.createGzip();
var r = fs.createReadStream('./mygzipfile.txt.gz');
var w = fs.createWriteStream('unzip.txt');
r.pipe(gzip).pipe(w);
// r.pipe(gunzip).pipe(w);


