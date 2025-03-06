Array.prototype.myMap = function (cb) {
    let arr = this; // Исходный массив
    let len = arr.length; // Длина массива
    let result = []; // Новый массив для результатов

    for (let i = 0; i < len; i++) {
        // Вызываем callback для каждого элемента и добавляем результат в новый массив
        result.push(cb(arr[i], i, arr));
    }

    return result; // Возвращаем новый массив
};



Array.prototype.map = function(cb, thisArg) {
    if (this == null) {
        throw new TypeError('Array.prototype.map called on null or undefined');
    }

    if (typeof cb !== 'function') {
        throw new TypeError(cb + 'is not a function');
    }

    const array = Object(this);
    const length = array.length >>> 0;
    const result = new Array(length);

    for (let i = 0; i < length; i++) {
        if (i in array) {
            result[i] = cb.call(thisArg, array[i], i, array);
        }
    }

    return result;
}
