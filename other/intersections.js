function intersections(s, t) {
    const result = [];
    let i = 0, j = 0;

    while (i < s.length && j < t.length) {
        const [start1, end1] = s[i];
        const [start2, end2] = t[j];

        const minEnd = Math.min(end1, end2);
        const maxStart = Math.max(start1, start2);


        if (maxStart <= minEnd) {
            result.push([maxStart, minEnd]);
        }

        // Двигаем указатель того интервала, который заканчивается раньше
        if (end1 < end2) {
            i++;
        } else {
            j++;
        }
    }

    return result;
}

console.log(intersections([[8, 12], [17, 22]], [[5, 11], [14, 18], [20, 23]])); // [[8, 11], [17, 18], [20, 22]]
console.log(intersections([[9, 15], [18, 21]], [[10, 14], [21, 22]])); // [[10, 14]]
