function searchRange(arr, target) {
    function findFirst(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let first = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                first = mid;
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return first;
    }

    function findLast(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let last = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                last = mid;
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return last;
    }

    const first = findFirst(arr, target);
    if (first === -1) return [];

    const last = findLast(arr, target);

    return [first, last];
}

console.log(searchRange([1, 2, 3], 1)); // [0, 0]
console.log(searchRange([1, 2, 3], 4)); // []
console.log(searchRange([1, 2, 2, 3, 4, 4, 4, 5], 4)); // [4, 6]
