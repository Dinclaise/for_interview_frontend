// Подстрока без повторений максимальной длины
function lengthOfLongestSubstring(str) {
    let left = 0;
    let seen = new Set();
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        while (seen.has(str[right])) {
            seen.delete(str[left]);
            left++;
        }

        seen.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}


console.log(lengthOfLongestSubstring("abcabcbb")); // 3 (подстрока "abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3 ("wke")
