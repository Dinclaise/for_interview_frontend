function findMaxAverage(nums, k) {
    let maxSum = 0;
    let currentSum = 0;

    // Вычисляем сумму первых `k` элементов
    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }

    maxSum = currentSum;

    // Сдвигаем окно вправо
    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
