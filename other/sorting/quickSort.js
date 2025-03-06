// Сложность:
//
//     Временная сложность:
//     Лучший случай: O(n log n).
// Средний случай: O(n log n).
// Худший случай: O(n²) (если pivot всегда самый маленький/большой элемент).
// Пространственная сложность: O(log n) (из-за рекурсии).


function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];

    for (const num of arr) {
        if (num < pivot) {
            left.push(num);
        } else if (num > pivot) {
            right.push(num);
        } else {
            equal.push(num);
        }
    }

    return [...quickSort(left), ...equal, ...quickSort(right)];
}

console.log(quickSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
