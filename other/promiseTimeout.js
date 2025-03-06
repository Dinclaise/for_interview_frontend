function promiseWithTimeout(promise, timeout) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error('Promise timed out'));
        }, timeout);

        promise
            .then((result) => {
                clearTimeout(timer);
                resolve(result);
            })
            .catch((error) => {
                clearTimeout(timer);
                reject(error);
            });
    });
}

// Пример использования
const slowPromise = new Promise((resolve) => {
    setTimeout(() => resolve('Done'), 5000);
});

promiseWithTimeout(slowPromise, 3000)
    .then(result => {
        console.log('Resolved:', result);
    })
    .catch(error => {
        console.error('Rejected:', error.message); // 'Promise timed out'
    });
