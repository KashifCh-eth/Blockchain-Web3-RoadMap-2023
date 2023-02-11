function sum(name ,...arguments) {
    let sum = 0;
    for (let i in arguments) {
        sum += arguments[i];
    }
    console.log(sum);
}

sum("kashif",22, 33, 44, 55, 66, 77, 88, 99,99);