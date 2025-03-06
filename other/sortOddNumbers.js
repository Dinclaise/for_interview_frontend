// отсортировать нечетные числа так, чтобы четные числа остались
const input = [5, 4, 1, 6, 3, 8];
const output = [1, 4, 3, 6, 5, 8];


const sortOddNumber = (input) => {
    const oddNumbers = [];
    const result = input.slice(); // Создаём копию массива, чтобы сохранить исходный порядок чётных чисел

    // Проходим по массиву и разделяем чётные и нечётные числа
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 !== 0) {
            oddNumbers.push(input[i]);
        }
    }

    // Сортируем только нечётные числа
    oddNumbers.sort((a, b) => a - b);

    // Вставляем отсортированные нечётные числа обратно в результат
    let oddIndex = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] % 2 !== 0) {
            result[i] = oddNumbers[oddIndex];
            oddIndex++;
        }
    }

    return result;
}
// console.log(sortOddNumber(input));


const sortOddNumberV2 = (input) => {
    const result = [...input];
    const oddNumbers = input.filter(el => el % 2 === 1).sort((a, b) => a - b);

    let oddIndex = 0;
    input.forEach((el, idx) => {
        if (el % 2 === 1) {
            result[idx] = oddNumbers[oddIndex++];
        }
    });

    return result;
}

console.log(sortOddNumberV2(input));
