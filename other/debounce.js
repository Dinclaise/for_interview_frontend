export const debounce = (func, wait) => {
    let timeoutId;

    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, wait)
    }
}

var debounceV1_1 = function(fn, t) {
    let timer;

    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(fn, t, ...args);
    }
};


var debounceV2 = function(fn, t) {
    let timeoutIDs = [];
    return function(...args) {
        let timeoutID = setTimeout(() => {
            return fn(...args)
        }, t);

        timeoutIDs.push(timeoutID);
        clearTimeout(timeoutIDs[timeoutIDs.length - 2]);
    }
};
