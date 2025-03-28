export const throttle = (fn, limit) => {
    let lastRan;
    let lastFunc;

    return (...args) => {
        const context = this;

        if (!lastRan) {
            lastFunc = fn.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);

            lastFunc = setTimeout(() => {
                if (Date.now() - lastRan >= limit) {
                    fn.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

function throttleV2(func, limit) {
    let isThrottle;

    return function(...args) {
        const context = this;

        if (!isThrottle) {
            // Если функция не заблокирована, выполняем её
            func.apply(context, args);

            // Блокируем выполнение на указаный интервал времени
            isThrottle = true;

            setTimeout(() => (isThrottle = false), limit);
        }
    }
}
