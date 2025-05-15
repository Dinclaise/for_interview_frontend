const myPromiseRace = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            Promise.resolve(promise).then(resolve, reject);
        });
    });
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'Resolved-1!', 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Resolved!-2', 1000);
})


myPromiseRace([p1, p2]).then(value => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})
