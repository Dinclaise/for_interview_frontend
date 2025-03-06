const removeElement = (nums, val) => {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count] = nums[i];
            count++;
        } else {
            delete nums[count]
        }
    }

    let temp = [];
    let jj = 0

    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] === "number") {
            temp[i - jj] = nums[i];
        } else {
            jj++
        }
    }

    nums = temp;

    console.log('nums-f', nums)

    return count;
};

// console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));
