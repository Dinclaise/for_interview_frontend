// [1, 4, 5, 10, 8], [1, 8, 7, 9, 5] => [1, 8, 5]

const aI = [1, 4, 5, 10, 8]; const bI =  [1, 8, 7, 9, 5];

// raw var
function intersection(a, b) {
    // o(n^2)
    return a.filter(n => b.includes(n));
}

//optimal var O(n + m)

function intersection(a, b) {
    const setB = new Set(b);
    return a.filter(n => setB.has(n));
}

