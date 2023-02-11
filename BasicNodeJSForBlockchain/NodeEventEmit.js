const EventEmit = require('events');
const eventemit = new EventEmit();

eventemit.on('CheckRollNum', (roll,msg) => {
    console.log(`the Roll number is ${roll} and this ${msg}`)
})




eventemit.emit('CheckRollNum', 08, "ok");


