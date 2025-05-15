Promise.myAny = function(iterable) {
    return new Promise((resolve, reject) => {
        if (iterable == null) {
            return reject(new TypeError('Promise.any requires an iterable argument'));
        }

        const promises = Array.from(iterable);
        const errors = [];
        let rejectedCount = 0;
        const total = promises.length;

        if (total === 0) {
            return reject(new AggregateError([], 'All promises were rejected'));
        }

        promises.forEach((p, index) => {
            // Преобразуем каждый элемент в промис
            Promise.resolve(p)
                .then((value) => {
                    // Если промис выполнен успешно, выполняем главный промис
                    resolve(value);
                })
                .catch((error) => {
                    // Сохраняем причину отклонения
                    errors[index] = error;
                    rejectedCount += 1;
                    // Если все промисы отклонены, отклоняем главный промис
                    if (rejectedCount === total) {
                        reject(new AggregateError(errors, 'All promises were rejected'));
                    }
                });
        });
    });
};


// const p1 = Promise.reject('Error 1');
// const p2 = Promise.reject('Error 2');
// const p3 = Promise.reject('Error 3');
//
// Promise.myAny([p1, p2, p3])
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.error(error); // Выведет: AggregateError: All promises were rejected
//         console.error(error.errors); // Выведет массив всех ошибок: ["Error 1", "Error 2", "Error 3"]
//     });

const p1 = Promise.reject('Error 1');
const p2 = Promise.reject('Error 2');
const p3 = Promise.resolve('Success!');

Promise.myAny([p1, p2, p3])
    .then((value) => {
        console.log(value); // Выведет: "Success!"
    })
    .catch((error) => {
        console.error(error);
    });

