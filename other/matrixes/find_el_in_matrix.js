function searchInSortedMatrix(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return [row, col]; // Найден элемент
        } else if (matrix[row][col] > target) {
            col--; // Двигаемся влево
        } else {
            row++; // Двигаемся вниз
        }
    }

    return [-1, -1]; // Элемент не найден
}

console.log(searchInSortedMatrix(
    [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
    ],
    5
)); // [1, 1]
