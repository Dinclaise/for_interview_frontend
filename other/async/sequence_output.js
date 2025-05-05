Promise.resolve(1)
    .then((x) => x + 1)
    .then(x => { throw x})
    .catch(err => { console.log(err); return; })
    .finally(res => console.log(res))
    .then(x => Promise.resolve(1))
    .catch(err => { console.log(err); })
    .then((x) => console.log(x))

// 2 undefined 1
