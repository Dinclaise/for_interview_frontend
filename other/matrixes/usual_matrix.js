function traverseMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) { // строки
        for (let j = 0; j < matrix[i].length; j++) { // столбцы
            console.log(`Элемент на позиции (${i}, ${j}):`, matrix[i][j]);
        }
    }
}

traverseMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);
