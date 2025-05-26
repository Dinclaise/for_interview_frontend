function findElementsOfFirstArray(arr1, arr2) {
    const result = [];
    let i = 0; // Индекс для a
    let j = 0; // Индекс для b

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            j++;
        } else if (arr1[i] === arr2[j]) {
            i++;
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    return result;
}

console.log(findElementsOfFirstArray([10, 20, 30], [19, 20, 21])); // [10, 30])
//
// Временная сложность : O(n + m), где n и m — длины массивов.
//     Пространственная сложность : O(k), где k — количество уникальных элементов.
