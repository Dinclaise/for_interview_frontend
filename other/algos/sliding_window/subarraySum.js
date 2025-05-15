function subarraySum(nums, target) {
    const count = { 0: 1 }; // Нулевая сумма встречается один раз
    let currSum = 0;
    let result = 0;

    for (const num of nums) {
        currSum += num;

        // Если текущая сумма минус target встречалась раньше — увеличиваем результат
        if (count[currSum - target]) {
            result += count[currSum - target];
        }

        // Увеличиваем счётчик текущих сумм
        count[currSum] = (count[currSum] || 0) + 1;
    }

    return result;
}

console.log(subarraySum([1, 1, 1], 2)); // 2 ([1,1], [1,1])
console.log(subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7)); // 4 ([3,4], [7], [7,2,-3,1], [4, 3]
