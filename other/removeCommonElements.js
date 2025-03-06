function removeCommonElements(a, b) {
    // Используем метод filter для создания нового массива,
    // который содержит только те элементы из a, которых нет в b
    return a.filter(item => !b.includes(item));
}

// Примеры использования:
console.log(removeCommonElements([10, 2, 2, 4], [2])); // [10, 4]
console.log(removeCommonElements([1, 2, 2], [1])); // [2, 2]
console.log(removeCommonElements([3, 2, 3], [1, 2])); // [3, 3]
