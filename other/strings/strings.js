function minifyString(value) {
    if (!value) return value;

    let result = '';
    let tempChar = value[0], tempCount = 1;

    for (let char of value) {
        if (tempChar !== char) {
            result += `${tempCount}${tempChar}`

            tempChar = char;
            tempCount = 0;
        }

        tempCount++
    }

    result += `${tempCount}${tempChar}`

    return result;
}

console.log('minifyString', minifyString('eeetteuuuuzdddddffgggrrrrrrrr'))
