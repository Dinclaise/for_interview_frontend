// KMP (Knuth-Morris-Pratt) - O(n + m)

function kmp(text, pattern) {
    const lps = buildLPS(pattern);
    let i = 0, j = 0;
    const result = [];

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            result.push(i - j);
            j = lps[j - 1];
        } else if (i < text.length && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return result;
}

function buildLPS(pattern) {
    const lps = Array(pattern.length).fill(0);
    let len = 0, i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i++] = len;
        } else if (len > 0) {
            len = lps[len - 1];
        } else {
            lps[i++] = 0;
        }
    }

    return lps;
}

console.log(kmp("ABABDABACDABABCABAB", "ABABC")); // [10]
console.log(kmp("AAAAA", "AAA")); // [0, 1, 2]
