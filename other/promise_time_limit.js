var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((res, rej) => {
            // Устанавливаем таймер
            const timerId = setTimeout(() => {
                rej('Time Limit Exceeded'); // Отклоняем промис, если время истекло
            }, t);

            // Вызываем функцию fn
            fn(...args)
                .then(result => {
                    clearTimeout(timerId); // Очищаем таймер при успешном завершении
                    res(result);          // Разрешаем промис с результатом
                })
                .catch(error => {
                    clearTimeout(timerId); // Очищаем таймер при ошибке
                    rej(error);           // Отклоняем промис с ошибкой
                });
        });
    };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
