// Task 1

// add(9)(10)() - 19
// add(9)() - 9
// add() - 0


// const add = (...args) => {
//     const sum = args.reduce((acc, el) => acc + el, 0);
//
//     const innerAdd = (...nextArgs) => {
//         if (nextArgs.length === 0) {
//             return sum;
//         } else {
//             return add(sum, ...nextArgs);
//         }
//     };
//
//     return innerAdd;
// };

const add = (...args) => {
    const sum = args.reduce((acc, el) => acc + el, 0);

    return (...nextArgs) => {
        return nextArgs.length === 0 ? sum : add(sum, ...nextArgs);
    }
};

console.log(add(1, 2, 3)()); // 6
console.log(add(1)(2)(3)()); // 6
console.log(add()()); // 0

const result1 = add(1, 2, 3);
console.log(result1()); // 6

const result2 = add(1)(2)(3);
console.log(result2()); // 6

const result3 = add();
console.log(result3()); // 0

// №2
const add2 = (...args) => {
    const sum = args.reduce((acc, el) => acc + el, 0);

    const innerAdd = (...nextArgs) => {
        if (nextArgs.length === 0) {
            return innerAdd;
        } else {
            return add2(sum, ...nextArgs);
        }
    };

    innerAdd.valueOf = () => sum;

    return innerAdd;
};

// Примеры использования:
const result4 = add2(1)(2)(3)()(8);
console.log(result4.valueOf()); // 14



// #3

function curry(func) {

    return function curried(...args) {
        console.log('args', args)
        console.log('func', func.length)
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                console.log('args2', args2)
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}

function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);
curriedSum(1, 2, 3)  // 6, всё ещё можно вызывать нормально
curriedSum(1)(2,3)  // 6, каррирование первого аргумента
curriedSum(1)(2)(3)


// №4

// const add = (initial = 0) => {
//     let sum = initial;
//
//     const inner = (value) => {
//         if (typeof value === 'undefined') { // Проверка на пустой вызов ()
//             return sum;
//         }
//         sum += value;
//         return inner; // Возвращаем функцию для продолжения цепочки
//     };
//
//     return inner;
// };
//
// // Использование
// console.log(add(5)(6)(7)()); // 18
// console.log(add(2)(3)()); // 5


// №5

// Если вы хотите, чтобы вызов () завершал выполнение даже при неполном наборе аргументов, нужно модифицировать логику.

function curry(func) {
    return function curried(...args) {
        // Если есть пустой вызов (), завершаем выполнение
        if (args.length === 0) {
            return func.apply(this, args);
        }
        // Если аргументов достаточно, вызываем func
        if (args.length >= func.length) {
            return func.apply(this, args);
        }
        // Иначе возвращаем функцию для дальнейших аргументов
        return function pass(...args2) {
            if (args2.length === 0) {
                return func.apply(this, args); // Завершаем при ()
            }
            return curried.apply(this, args.concat(args2));
        };
    };
}
