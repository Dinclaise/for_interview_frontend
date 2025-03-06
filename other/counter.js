function counter(initialValue = 0) {
    let count = initialValue;

    return {
        increment: function() {
            return ++count;
        },
        decrement: function() {
            return --count;
        },
        reset: function() {
            count = initialValue;
            return count;
        },
        getValue: function() {
            return count;
        }
    };
}

const myCounter = counter(10); // Начальное значение: 10

console.log(myCounter.getValue()); // 10
console.log(myCounter.increment()); // 11
console.log(myCounter.increment()); // 12
console.log(myCounter.decrement()); // 11
console.log(myCounter.reset()); // 10
console.log(myCounter.getValue()); // 10


// var 2
function counter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
        return count;
    };
}

// Пример использования:
let a = counter();
a(); // 1
a(); // 2

let b = counter();
b(); // 1
