Array.prototype.myFilter = function (cb) {
    let arr = this;
    let len = arr.length;

    let result = [];

    for (let i = 0; i < len; i++) {
        if (cb(arr[i], i, arr)) { // Проверяем, возвращает ли cb true
            result.push(arr[i]); // Добавляем исходный элемент в результат
        }
    }

    return result;
}
