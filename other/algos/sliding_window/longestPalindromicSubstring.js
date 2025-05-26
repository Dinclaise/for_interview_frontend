function longestPalindromicSubstring(str) {
    if (!str) return str;

    let res = '';
    let resLen = 0;

    for (let i = 0; i < str.length; i++) {
        // odd
        let left = i, right = i;

        while(left >= 0 && right < str.length && str[left] === str[right]) {
            if (right - left + 1 > resLen) {
                res = str.slice(left, right + 1);
                resLen = right - left + 1;
            }

            left--;
            right++;
        }

        // even
        let leftE = i, rightE = i + 1;

        while(leftE >= 0 && rightE < str.length && str[leftE] === str[rightE]) {
            if (rightE - leftE + 1 > resLen) {
                res = str.slice(leftE, rightE + 1);
                resLen = rightE - leftE + 1;
            }

            leftE--;
            rightE++;
        }
    }

    return res;
}
