function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Обработка Date
    if (obj instanceof Date) {
        return new Date(obj);
    }

    // Обработка RegExp
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }

    // Обработка Map
    if (obj instanceof Map) {
        const mapCopy = new Map();
        obj.forEach((value, key) => {
            mapCopy.set(key, deepClone(value));
        });
        return mapCopy;
    }

    // Обработка Set
    if (obj instanceof Set) {
        const setCopy = new Set();
        obj.forEach(value => {
            setCopy.add(deepClone(value));
        });
        return setCopy;
    }

    // Обработка массива
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    // Обработка объекта
    const objCopy = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepClone(obj[key]);
        }
    }
    return objCopy;
}
