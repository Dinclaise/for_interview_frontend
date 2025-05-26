function wait(ms, signal) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(resolve, ms);

        if (signal) {
            signal.addEventListener('abort', () => {
                clearTimeout(timer);
                reject(new DOMException('Ожидание отменено', 'AbortError'));
            });
        }
    });
}

const controller = new AbortController();
const { signal } = controller;

wait(3000, signal)
    .then(() => console.log('Задержка завершена'))
    .catch(err => console.error(err));

// Отмена через 1 секунду
setTimeout(() => controller.abort(), 1000);


// function wait(ms) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms);
//     });
// }
