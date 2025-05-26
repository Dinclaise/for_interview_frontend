// Бинарный поиск по строке

function longestCommonSubstring(s1, s2) {
    const n = s1.length;
    const m = s2.length;

    function isCommon(len) {
        const set = new Set();

        for (let i = 0; i + len <= n; i++) {
            const sub = s1.slice(i, i + len);
            set.add(sub);
        }

        for (let i = 0; i + len <= m; i++) {
            const sub = s2.slice(i, i + len);
            if (set.has(sub)) return true;
        }

        return false;
    }

    let left = 0, right = Math.min(n, m);
    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        if (isCommon(mid)) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    return left;
}


console.log(longestCommonSubstring("abcde", "cdefg")); // 3 ("cde")
console.log(longestCommonSubstring("abc", "abc"));     // 3
console.log(longestCommonSubstring("abc", "def"));     // 0

