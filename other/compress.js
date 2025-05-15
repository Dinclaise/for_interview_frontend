const compress = (list) => {
    if (list.length === 0) return ''

    let copyList = [...list].sort((a, b) => a - b);
    let result = [];


    let start = copyList[0]
    let end = start

    for (let i = 1; i < copyList.length; i++) {
        let current = copyList[i];

        if (current === end + 1) {
            end = current
        } else {
            if (start === end) {
                result.push(start.toString());
            } else {
                result.push(`${start}-${end}`);
            }

            start = current
            end = start
        }
    }

    if (start === end) {
        result.push(start.toString());
    } else {
        result.push(`${start}-${end}`);
    }

    return result.join(',')
}

console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0]))
