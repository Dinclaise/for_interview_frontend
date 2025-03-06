function callLimit(fn, limit, callback) {
    let count = 0;

    function limitedFn(...args) {
        if (count < limit) {
            fn(...args);
            count++;
        } else {
            if (callback) {
                callback();
            }
        }
    }

    limitedFn.reset = function() {
        count = 0;
    };

    return limitedFn;
}

// Пример использования:
function log(title, message) {
    console.log(title + ': ' + message);
}

var logLimited = callLimit(log, 3, () => console.log('Limit reached'));

logLimited("title1", "desc"); // title1: desc
logLimited("title2", "desc"); // title2: desc
logLimited("title3", "desc"); // title3: desc
logLimited("title4", "desc"); // Limit reached

logLimited.reset(); // Перезагрузили счётчик

logLimited("title5", "desc"); // title5: desc
logLimited("title6", "desc"); // title6: desc
logLimited("title7", "desc"); // title7: desc
logLimited("title8", "desc"); // Limit reached
