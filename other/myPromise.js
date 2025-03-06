class MyPromise {
    constructor(executor) {
        this.state = 'pending'; // Изначально состояние промиса - 'pending'
        this.value = undefined; // Значение для 'fulfilled' или 'rejected'
        this.handlers = []; // Массив для хранения колбэков

        // Метод resolve
        const resolve = (value) => {
            if (this.state !== 'pending') return;
            this.state = 'fulfilled';
            this.value = value;
            this.handlers.forEach(this.handle);
        };

        // Метод reject
        const reject = (reason) => {
            if (this.state !== 'pending') return;
            this.state = 'rejected';
            this.value = reason;
            this.handlers.forEach(this.handle);
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    handle = (handler) => {
        if (this.state === 'fulfilled') {
            handler.onFulfilled(this.value);
        } else if (this.state === 'rejected') {
            handler.onRejected(this.value);
        } else {
            this.handlers.push(handler);
        }
    };

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            this.handle({
                onFulfilled: (value) => {
                    try {
                        resolve(onFulfilled ? onFulfilled(value) : value);
                    } catch (error) {
                        reject(error);
                    }
                },
                onRejected: (reason) => {
                    try {
                        if (onRejected) {
                            resolve(onRejected(reason));
                        } else {
                            reject(reason);
                        }
                    } catch (error) {
                        reject(error);
                    }
                }
            });
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    static resolve(value) {
        return new MyPromise((resolve) => {
            resolve(value);
        });
    }

    static reject(reason) {
        return new MyPromise((_, reject) => {
            reject(reason);
        });
    }

    static all(promises) {
        return new MyPromise((resolve, reject) => {
            let resolvedCounter = 0;
            let results = new Array(promises.length);

            promises.forEach((promise, index) => {
                MyPromise.resolve(promise).then(
                    (value) => {
                        resolvedCounter++;
                        results[index] = value;
                        if (resolvedCounter === promises.length) {
                            resolve(results);
                        }
                    },
                    (reason) => {
                        reject(reason);
                    }
                );
            });
        });
    }

    static race(promises) {
        return new MyPromise((resolve, reject) => {
            promises.forEach((promise) => {
                MyPromise.resolve(promise).then(resolve, reject);
            });
        });
    }
}

// Пример использования
const p1 = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve('Resolved!'), 1000);
});

p1.then(value => {
    console.log(value); // 'Resolved!' через 1 секунду
});
