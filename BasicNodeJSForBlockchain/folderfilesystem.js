const fs = require('fs');

// fs.mkdir('new', (err) => {
//     if (err)
//         console.log(err);
//     else
//         fs.writeFile('./new/file.txt','this file', (err) => {
//             if (err)
//                 console.log(err);
//             else
//                 console.log("file will be created!");
//         })
// })


// readfiles
fs.readdir('new', (err, files) => {
    if (err)
        console.log(err);
    else
        for (let file of files) {
            // deleted files inside
            fs.unlink('./new/' + file, (err) => {
                if (err)
                    console.log(err);
                else
                    // deleted folder
                    fs.rmdir('new', (err) => {
                        if (err)
                            console.log(err);
                        else
                            console.log('folder and files both deleted');
                   })
              })
          }
})