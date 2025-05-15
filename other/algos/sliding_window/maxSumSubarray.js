function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let currentSum = 0;

    // Вычисляем сумму первых `k` элементов
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }

    maxSum = currentSum;

    // Сдвигаем окно на один элемент вправо
    for (let i = k; i < arr.length; i++) {
        currentSum += arr[i] - arr[i - k]; // Обновляем сумму
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(maxSumSubarray([1, 4, 2, 10, 2, 3, 1, 0, 20], 4)); // 24 (10 + 2 + 3 + 1)
