function nestObj(path) {
    // Разделяем строку на массив ключей
    const keys = path.split('.');

    const result = {};

    // Используем временную переменную для отслеживания текущего уровня вложенности
    let currentLevel = result;

    for (let key of keys) {
        currentLevel[key] = {};

        currentLevel = currentLevel[key];
    }

    let lastKey = keys[keys.length - 1];
    currentLevel[lastKey] = {};

    return result;
}

// Примеры использования:
console.log(nestObj('a.b.c'));
// { a: { b: { c: {} } } }

console.log(nestObj('x.y.z.w'));
// { x: { y: { z: { w: {} } } } }
