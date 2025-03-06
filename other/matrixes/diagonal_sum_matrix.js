function sumAboveDiagonal(matrix) {
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }

    return sum;
}

console.log(sumAboveDiagonal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])); // 2 + 3 + 6 = 11
