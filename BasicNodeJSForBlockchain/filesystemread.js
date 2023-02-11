const file = require('fs');
// create 

file.writeFile('create.txt', 'this is node create file example ', (err) => {
    if (err) {
          console.log(err);
    } else {
        console.log("file succesfully Created! ");

        file.readFileSync('create.txt', 'utf8', (err, file) => {
            if (err) {
                console.log("error to read file");
            } else
            {
                console.log(file);
            }
         
        })
    }
})

//rename 

file.rename('nodetxt.txt', 'node.txt', (err) => {
    if (err)
        console.log(err);
    else
        console.log("yor File Is Renamed")
})

// Change file inside txt

file.appendFile('node.txt', 'this text for append', (err) => {
    if (err)
        console.log(err);
    else
        console.log('data is appennned');
})

// Delete
file.unlink('node.txt', (err) => {
    if (err)
        console.log(err)
    else
        console.log('this file is Sucessfully deleted');
})