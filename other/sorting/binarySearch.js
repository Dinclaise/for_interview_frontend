// Сложность:
//
//     Временная сложность: O(log n).
// Пространственная сложность: O(1) (итеративная версия) или O(log n) (рекурсивная версия).


function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Найден
        } else if (arr[mid] < target) {
            left = mid + 1; // Ищем в правой половине
        } else {
            right = mid - 1; // Ищем в левой половине
        }
    }

    return -1; // Не найден
}

console.log(binarySearch([2, 3, 4, 5, 8], 5)); // 3
console.log(binarySearch([2, 3, 4, 5, 8], 10)); // -1
