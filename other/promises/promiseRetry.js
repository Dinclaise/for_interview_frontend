function retryPromise(promiseFn, retries) {
    return new Promise((resolve, reject) => {
        const attempt = (n) => {
            promiseFn()
                .then(resolve)
                .catch((error) => {
                    if (n === 1) {
                        reject(error);
                    } else {
                        attempt(n - 1);
                    }
                });
        };
        attempt(retries);
    });
}

// Пример использования
const unreliableFunction = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Success');
        } else {
            reject('Failed');
        }
    });
};

retryPromise(unreliableFunction, 3)
    .then(result => {
        console.log('Resolved:', result);
    })
    .catch(error => {
        console.error('Rejected:', error);
    });
