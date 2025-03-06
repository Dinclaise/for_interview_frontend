// simple
function memoize(fn) {
    const cache = new Map(); // Храним результаты в Map

    return function(...args) {
        const key = JSON.stringify(args); // Преобразуем аргументы в строку для ключа

        if (cache.has(key)) {
            console.log(`Cache hit for arguments: ${key}`);
            return cache.get(key); // Возвращаем закэшированный результат
        }

        console.log(`Cache miss for arguments: ${key}`);
        const result = fn(...args); // Вычисляем результат
        cache.set(key, result); // Кэшируем результат
        return result;
    };
}



// complex
let count = 0;

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));
const getData = async () => {
    await sleep(5000);
    return Promise.resolve(++count);
}

const memoize = (caller, lifeTime) => {
    let cache = null;
    let timeoutId = null;
    let inProgress = false;
    let resultPromise = null;

    return async function memo() {
        if (cache !== null) {
            return cache;
        }

        if (inProgress) {
            return resultPromise;
        }

        inProgress = true;
        resultPromise = caller().then((result) => {
            cache = result;
            timeoutId = setTimeout(() => {
                cache = null;
                inProgress = false;
                resultPromise = null;
            }, lifeTime);
            return result;
        }).catch((error) => {
            inProgress = false;
            resultPromise = null;
            throw error;
        });

        return resultPromise;
    };
}

const getJsonMemoize = memoize(getData, 1000);

(async function() {
    await sleep(3000);
    console.log(await getJsonMemoize()); // 1
    console.log(await getJsonMemoize()); // 1
    await sleep(3000);
    console.log(await getJsonMemoize()); // 2
    console.log(await getJsonMemoize()); // 2
})();


//---------------------------------------------------------------------------
function memoizeV2(fn) {
    const cache = new WeakMap();

    return function memoized(...args) {
        let currentCache = cache;

        for (const arg of args) {
            const isObject = arg !== null && (typeof arg === 'object' || typeof arg === 'function');

            if (isObject) {
                if (!currentCache.has(arg)) {
                    currentCache.set(arg, new WeakMap());
                }
                currentCache = currentCache.get(arg);
            } else {
                // Для примитивов используем обычную Map
                if (!currentCache.has('_prim')) {
                    currentCache.set('_prim', new Map());
                }
                const primCache = currentCache.get('_prim');

                if (!primCache.has(arg)) {
                    primCache.set(arg, new WeakMap());
                }
                currentCache = primCache.get(arg);
            }
        }

        if (currentCache.has('result')) {
            return currentCache.get('result');
        } else {
            const result = fn(...args);
            currentCache.set('result', result);
            return result;
        }
    };
}


function add(...args) {
    return args.reduce((sum, n) => sum + n, 0);
}

const memoizedAdd = memoizeV2(add);

console.log(memoizedAdd(1, 2)); // 3 (вычислено)
console.log(memoizedAdd(1, 2)); // 3 (из кеша)

const obj1 = { a: 1 };
const obj2 = { b: 2 };

function combineObjects(...objs) {
    return Object.assign({}, ...objs);
}

const memoizedCombine = memoizeV2(combineObjects);

console.log(memoizedCombine(obj1, obj2)); // { a: 1, b: 2 } (вычислено)
console.log(memoizedCombine(obj1, obj2)); // { a: 1, b: 2 } (из кеша)
