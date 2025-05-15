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

function throttleV2_1(func, limit) {
    let isThrottle;

    return function (...args) {
        if (!isThrottle) {
            func.apply(this, args)

            isThrottle = true

            setTimeout(() => isThrottle = false, limit);
        }
    }
}


// throttle без this
const throttle = (func, delay) => {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };
};
