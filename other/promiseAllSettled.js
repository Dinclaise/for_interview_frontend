function promiseAllSettled(promises) {
    return new Promise((resolve) => {
        let results = [];
        let finishedPromises = 0;

        if (promises.length === 0) {
            resolve(results);
            return;
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = { status: 'fulfilled', value };
                    finishedPromises += 1;
                    if (finishedPromises === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reason => {
                    results[index] = { status: 'rejected', reason };
                    finishedPromises += 1;
                    if (finishedPromises === promises.length) {
                        resolve(results);
                    }
                });
        });
    });
}

// Пример использования
const p1 = Promise.resolve(1);
const p2 = Promise.reject('error');
const p3 = Promise.resolve(3);

promiseAllSettled([p1, p2, p3])
    .then(results => {
        console.log('All promises settled:', results);
        // Вывод:
        // [
        //   { status: 'fulfilled', value: 1 },
        //   { status: 'rejected', reason: 'error' },
        //   { status: 'fulfilled', value: 3 }
        // ]
    });
