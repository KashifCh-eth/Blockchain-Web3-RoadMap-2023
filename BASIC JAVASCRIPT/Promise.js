const x = new Promise((resolve, reject) => {
    if (true) {
        resolve("succed");
    } else {
        reject("errro");
    }
})

x.then((res) => { console.log(res); }).catch((err) => { console.log(err); })



