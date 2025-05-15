function promiseAll<T>(promises: Array<Promise<T>>): Promise<T[]> {
    return new Promise((resolve, reject) => {
        const results: T[] = [];
        let finishedPromises = 0;

        // Если массив промисов пустой, сразу резолвим его.
        if (promises.length === 0) {
            resolve(results);
            return;
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    finishedPromises += 1;

                    // Если все промисы завершены, резолвим результирующий промис
                    if (finishedPromises === promises.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    // Если хотя бы один промис отклонен, отклоняем результирующий промис
                    reject(error);
                });
        });
    });
}

// Пример использования

const var_2: Array<Promise<number>> = [
    Promise.resolve(1),
    new Promise<number>(resolve => setTimeout(() => resolve(20), 1000)),
    new Promise<number>(resolve => setTimeout(() => resolve(30), 6000)),
    new Promise<number>(resolve => setTimeout(() => resolve(40), 3000)),
    Promise.resolve(10)
];

promiseAll(var_2)
    .then((results: number[]) => {
        console.log('All promises resolved:', results); // [1, 20, 30, 40, 10]
    })
    .catch((error: unknown) => {
        console.error('At least one promise rejected:', error);
    });






// parallel

const promiseAllParallel = (promises) => {
    return new Promise((resolve, reject) => {
        let result = new Array(promises.length);
        let finishedPromises = 0;

        if (promises.length === 0) {
            resolve(result);
            return;
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    result[index] = value;
                    finishedPromises += 1;

                    if (finishedPromises === promises.length) {
                        resolve(result);
                    }
                })
                .catch(reject); // Отклонить основной промис, если любой промис отклоняется
        });
    });
};

// Пример использования
promiseAllParallel([
    Promise.resolve(1),
    new Promise(resolve => setTimeout(() => resolve(20), 1000)),
    new Promise(resolve => setTimeout(() => resolve(30), 2000)),
    new Promise(resolve => setTimeout(() => resolve(40), 3000)),
    Promise.resolve(10)
]).then((result) => {
    console.log('Result:', result); // [1, 20, 30, 40, 10]
}).catch((error) => {
    console.error('Error:', error);
});

