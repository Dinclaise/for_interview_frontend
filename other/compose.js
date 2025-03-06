function sum(a, b) {
    return a + b
};

function square(a) {
    return a * a
};

function times2(a) {
    return a * 2
};


function compose(...fns) {
    return (...args) => {
        const initialValue = fns[fns.length - 1](...args);

        return fns.slice(0, -1).reduceRight((acc, fn) => fn(acc), initialValue);
    }
}

console.log('1', compose(square, times2, sum)(3, 4));
console.log('2', square(times2(sum(3, 4))));
console.log(compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))));
console.log(compose(square, times2)(7) === square(times2(7)));
