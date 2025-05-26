function getMaxCommonSubstring(str) {
    if (!str) return 0;

    let dictS = new Set();
    let maxSubstr = 0;

    for (let i = 0; i < str.length; i++) {
        const curStr = str[i];

        for (let j = i; j < str.length; j++) {
            if (dictS.has(curStr)) {
                break;
            } else {
                dictS.add(curStr);
                maxSubstr = Math.max(maxSubstr, dictS.size)
            }
        }
    }

    return maxSubstr;
}

console.log('gMCS', getMaxCommonSubstring('abcdabcdej')); // 6 - abcdej
