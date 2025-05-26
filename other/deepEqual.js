function isDeepEqual(obj1, obj2) {
    if (!obj1 || !obj2) return false;

    if (typeof obj1 !== 'object' && typeof obj2 !== 'object') {
        if (obj1 !== obj2) return false;
    }

    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) {
            return false;
        }

        for (let i = 0; i < obj1.length - 1; i++) {
            if (obj1[i] !== obj2[i]) return false;

            if(!isDeepEqual(obj1[i], obj2[i])) return false;
        }

        return true;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let i = 0; i < keys1.length; i++) {
        const keyObj1 = keys1[i];
        const keyObj2 = keys2[i];

        if (keyObj1 !== keyObj2) return false;

        if(!isDeepEqual(obj1[keyObj1], obj2[keyObj2])) return false;
    }

    return true;
}

const c = [1, 2, 3];
const d = [1, 2, 3];
console.log(isDeepEqual(c, d)); // true

const e = { a: 1, b: { c: 2 } };
const f = { a: 1, b: { c: 3 } };
console.log(isDeepEqual(e, f)); // false

const g = { a: 1, b: { c: { d: 4 } } };
const h = { a: 1, b: { c: { d: 4 } } };
console.log(isDeepEqual(g, h)); // true

const i = { a: 1, b: 2 };
const j = { a: 1, b: 2, c: 3 };
console.log(isDeepEqual(i, j)); // false
