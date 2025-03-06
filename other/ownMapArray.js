if (!Array.prototype.map) {
    Array.prototype.map = function(callback, thisArg) {
        if (this == null) {
            throw new TypeError('Array.prototype.map called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        const array = Object(this);
        const length = array.length >>> 0;
        const result = new Array(length);

        for (let i = 0; i < length; i++) {
            if (i in array) {
                result[i] = callback.call(thisArg, array[i], i, array);
            }
        }

        return result;
    };
}


// 2

// 1. Добавляем метод map в прототип массива
Array.prototype.myMap = function(callback) {
    // 2. Проверяем, что переданный аргумент - это функция
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    // 3. Создаем новый массив для хранения результатов
    const resultArray = [];

    // 4. Итерируем по текущему массиву (this)
    for (let i = 0; i < this.length; i++) {
        // Проверяем, что элемент существует (важно для разреженных массивов)
        if (this.hasOwnProperty(i)) {
            // Применяем callback к текущему элементу и добавляем результат в новый массив
            resultArray.push(callback(this[i], i, this));
        }
    }

    // 5. Возвращаем новый массив
    return resultArray;
};

// Пример использования
const numbers = [1, 2, 3, 4];
const doubled = numbers.myMap(function(number) {
    return number * 2;
});

console.log(doubled); // [2, 4, 6, 8]
