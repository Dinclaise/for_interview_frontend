
// ver 1
function flat(array) {
    return array.reduce((result, item) => {
        return result.concat(Array.isArray(item) ? flat(item) : item);
    }, []);
}

// var 2

function flat(array) {
    let result = [];

    for (let item of array) {
        if (Array.isArray(item)) {
            result = result.concat(flat(item));
        } else {
            result.push(item);
        }
    }

    return result;
}


// polyfill array without depth

Array.prototype.myFlat = function() {
    const result = [];

    for (const item of this) {
        if (Array.isArray(item)) {
            result.push(...item); // Раскрываем массив на один уровень
        } else {
            result.push(item);
        }
    }

    return result;
};


// with depth
Array.prototype.myFlat = function(depth = 1) {
    const result = [];

    function flatten(array, currentDepth) {
        for (const item of array) {
            if (Array.isArray(item) && currentDepth < depth) {
                flatten(item, currentDepth + 1); // Рекурсивно раскрываем массив
            } else {
                result.push(item);
            }
        }
    }

    flatten(this, 0);
    return result;
};
