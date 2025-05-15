function promiseSequence(promises) {
    return promises.reduce((acc, promise) => {
        return acc.then(results =>
            promise.then(result => {
                results.push(result);
                return results;
            })
        );
    }, Promise.resolve([]));
}

// for (pr of promises) {
//     await pr();
// }

// Пример использования
const p1 = () => Promise.resolve(1);
const p2 = () => Promise.resolve(2);
const p3 = () => Promise.resolve(3);

promiseSequence([p1(), p2(), p3()])
    .then(results => {
        console.log('All promises resolved in sequence:', results); // [1, 2, 3]
    });
