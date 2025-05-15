// 1
const myPromise = new Promise((resolve, reject) => {
    // Асинхронная операция
    setTimeout(() => {
        const success = true; // или false в случае ошибки

        if (success) {
            resolve('Operation was successful');
        } else {
            reject('Operation failed');
        }
    }, 1000);
});

myPromise
    .then((result) => {
        console.log(result); // 'Operation was successful'
    })
    .catch((error) => {
        console.error(error); // 'Operation failed'
    });


// 1.1

const asyncOperation = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data loaded');
        }, 2000);
    });
};

asyncOperation().then((data) => {
    console.log(data); // 'Data loaded'
});




// 2  Promise.resolve() -  Является thenable (объектом с методом then, но не настоящим Promise).

const resolvedPromise = Promise.resolve('Already resolved');

resolvedPromise
    .then((result) => {
        console.log(result); // 'Already resolved'
    });



// 2.1

const existingPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Resolved after timeout');
    }, 1000);
});

const wrappedPromise = Promise.resolve(existingPromise);

wrappedPromise.then((data) => {
    console.log(data); // 'Resolved after timeout'
});
