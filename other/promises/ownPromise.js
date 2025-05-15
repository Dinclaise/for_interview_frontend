class MyPromise {
    constructor(executer) {
        this.state = 'pending';
        this.value = undefined;
        this.onFulfilled = [];
        this.onRejected = [];

        const resolve = (value) => {
            if (this.state !== 'pending') return;
            this.state = 'fulfilled';
            this.value = value;
            this.onFulfilled.forEach(handler => handler(value))
        }

        const reject = (reason) => {
            if (this.state !== 'pending') return;
            this.state = 'rejected';
            this.value = reason;
            this.onRejected.forEach(handler => handler(reason))
        }

        try {
            executer(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }


    then(onSuccess) {
        return new MyPromise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                resolve(onSuccess(this.value));
            } else {
                this.onFulfilled.push(() => {
                    resolve(onSuccess(this.value));
                })
            }
        })
    }

    catch(onError) {
        return new MyPromise((resolve, reject) => {
            if (this.state === 'rejected') {
                reject(onError(this.value));
            } else {
                this.onRejected.push(() => {
                    reject(onError(this.value));
                })
            }
        })
    }

    static resolve(value) {
        return new MyPromise((resolve) => resolve(value));
    }

    static reject(reason) {
        return new MyPromise((_, reject) => reject(reason));
    }
}
