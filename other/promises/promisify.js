function promisify(fn) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            const callback = (error, result) => {
                if (error) reject(error);
                resolve(result);
            }

            fn.apply(this, [...args, callback]);
        })
    }
}

function loadScript(src, callback) {
    setTimeout(() => {
        if (src === 'bad_url') {
            callback(new Error('Error: Cannot load the script'));
        } else {
            callback(null, `Скрипт ${src} загружен`);
        }
    }, 0)
}


const loadScriptPromise = promisify(loadScript);

loadScriptPromise('bad_url')
    .then(result => console.log(result))
    .catch(error => console.error(error))

loadScriptPromise('url')
    .then(result => console.log(result))
    .catch(error => console.error(error))
