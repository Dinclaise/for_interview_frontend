const twoSum = (nums, target) => {
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        let differ = target - nums[i];

        if (map.has(differ)) {
            let getSecondIdx = map.get(differ)
            return [getSecondIdx, i]
        } else {
            map.set(nums[i], i)
        }
    }
};

console.log(twoSum([2,7,11,15]));
