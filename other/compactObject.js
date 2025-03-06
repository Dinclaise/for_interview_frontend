var compactObject = function(obj) {

    function compactArray(arr) {
        // Создаём новый массив, куда войдут только truthy-элементы.
        // При этом если элемент сам массив/объект — рекурсивно «почистим» его.
        const result = [];
        for (const item of arr) {
            if (item) { // falsy (0, false, null, undefined, '') — не пройдут
                if (Array.isArray(item)) {
                    result.push(compactArray(item));
                } else if (typeof item === 'object') {
                    result.push(compactObj(item));
                } else {
                    result.push(item);
                }
            }
        }
        return result;
    }

    function compactObj(o) {
        // Создаём новый объект, где будут только те поля,
        // значение которых — truthy. Если значение — массив/объект, рекурсивно «почистим».
        const result = {};
        for (const [key, value] of Object.entries(o)) {
            if (value) { // пропускаем falsy
                if (Array.isArray(value)) {
                    result[key] = compactArray(value);
                } else if (typeof value === 'object') {
                    result[key] = compactObj(value);
                } else {
                    result[key] = value;
                }
            }
        }
        return result;
    }

    // Определяем, что делать в зависимости от типа
    if (Array.isArray(obj)) {
        return compactArray(obj);
    } else if (obj && typeof obj === 'object') {
        return compactObj(obj);
    } else {
        // Если это не массив и не объект, просто возвращаем,
        // хотя по условию задачи вход чаще всего будет массив/объект.
        return obj;
    }
};


// Example 1:
//
// Input: obj = [null, 0, false, 1]
// Output: [1]
// Explanation: All falsy values have been removed from the array.
//     Example 2:
//
// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}
// Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
//     Example 3:
//
// Input: obj = [null, 0, 5, [0], [false, 16]]
// Output: [5, [], [16]]
// Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed
