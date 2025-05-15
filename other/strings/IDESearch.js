// O(n + k)
function IDESearch(searchVal, fileName) {
    if (!searchVal) return true;

    let [baseName] = fileName.split('.', 1);
    let i = 0;

    for (let j = 0; j < baseName.length - 1 && i < searchVal.length - 1; j++) {
        if (baseName[j].toLowerCase() === searchVal[i].toLowerCase()) {
            i++
        }
    }

    return i === searchVal.length - 1;
}

// O(n * k)
function IDESearch_b(searchVal, fileName) {
    let searchWords = searchVal.split(''), tempWordIdx = 0;
    let [file, extension] = fileName.split('.');

    for (let i = 0; i <= file.length - 1; i++) {
        if (searchWords.length === 0) return true;

        const currentFileWord = file[i];

        if (currentFileWord === searchWords[tempWordIdx]) {
            searchWords.shift();
        }
    }

    return searchWords.length === 0;
}

console.log(IDESearch('crdle', 'crocodile.txt')); // true
console.log(IDESearch('el', 'crocodile.txt')); // false
console.log(IDESearch('coco', 'crocodile.txt')); // true
console.log(IDESearch('crkdl', 'crocodile.txt')); // false
