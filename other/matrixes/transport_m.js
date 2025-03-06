function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = Array.from({ length: cols }, () => []);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }

    return transposed;
}

console.log(transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));
// Результат:
// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
// ]
