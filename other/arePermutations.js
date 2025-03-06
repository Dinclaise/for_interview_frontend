function arePermutations(s1, s2) {
    if (s1.length !== s2.length) return false;

    const dict = new Map();

    for (let chr of s1) {
        if (dict.has(chr)) {
            dict.set(chr, (dict.get(chr) ?? 0) + 1)
        } else {
            dict.set(chr, 1);
        }
    }

    for (let chr2 of s2) {
        if (dict.has(chr2)) {
            dict.set(chr2, dict.get(chr2) - 1)

            if (dict.get(chr2) === 0) {
                dict.delete(chr2);
            }
        } else {
            return false;
        }
    }

    return dict.sizes() === 0;
}
