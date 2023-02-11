const Readline = require('readline');
 
// util for time-stamp

const util = require('util');
 

const read = Readline.createInterface({
  input:   process.stdin,
   output:  process.stdout
})
read.question("your Name Please ? \n", (name) => {
    read.setPrompt(`Hay ${name}. i hope You Doing Good! please tell me your Age `);
    read.prompt();
        read.on('line', (age) => {
            if (age < 18) {
                Age = age;
            util.log(`${name} you are not Proceessd! beause your still ${age}`);
            read.close();
        } else {
            util.log(`${name} your procedd!`);
            read.close();
        }
    })
})

 