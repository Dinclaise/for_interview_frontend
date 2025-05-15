// Найти минимальную длину подмассива, сумма которого ≥ target

function minSubArrayLen(target, nums) {
    let start = 0;
    let currentSum = 0;
    let minLength = Infinity;

    for (let end = 0; end < nums.length; end++) {
        currentSum += nums[end];

        // Сдвигаем `start` вправо, пока сумма >= target
        while (currentSum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            currentSum -= nums[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2 ([4,3])
console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]));     // 5
console.log(minSubArrayLen(100, [1, 2, 3]));          // 0
