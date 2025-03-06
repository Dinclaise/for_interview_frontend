// // 1
// const obj = {car: 'BMW', plane: 'Jett'}
// console.log(Object.keys(obj)); // ['car', 'plane']
//
// // 2
// const obj2 = { car: 'BMW', plane: 'Jett' };
//
// for (const key in obj2) {
//     if (obj2.hasOwnProperty(key)) {
//         console.log(key); // выводит 'car' и 'plane'
//     }
// }



// ------------------------- рекурсивное сравнение

const redCar = {
    wheels: 4,
    brake: 3,
    speed: 180,
    options: [
        {optionKey: "122-333-333", optionName: "isBroken"},
        {optionKey: "552-443-333", optionName: "warranty"},
    ]
};

const blueCar = {
    wheels: 4,
    brake: 5,
    speed: 110,
    options: [
        {optionKey: "122-333-333", optionName: "isBroken"},
        {optionKey: "552-443-333", optionName: "warranty"},
    ]
}

const greenCar = {
    wheels: 4,
    brake: 5,
    speed: 110,
    options: [
        {optionKey: "122-333-333", optionName: "color"},
        {optionKey: "552-443-333", optionName: "warranty"},
    ]
}

const yellowCar = {
    wheels: 4,
    brake: 3,
    speed: 180,
    options: [
        {optionKey: "122-333-333", optionName: "isBroken"},
        {optionKey: "552-443-333", optionName: "warranty"},
    ]
};

const isEmpty = (obj1, obj2) => {
    const obj1keys = Object.keys(obj1);
    const obj2keys = Object.keys(obj2);

    if (obj1keys.length !== obj2keys.length) return false;

    for (const key in obj1) {
        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
            const obj1value = obj1[key];
            const obj2value = obj2[key];

            const isObjects = typeof obj1value === 'object' && !Array.isArray(obj1value) && typeof obj2value === 'object' && !Array.isArray(obj2value);
            const isArray = Array.isArray(obj1value) && Array.isArray(obj2value);

            if (isArray) {
                if (obj1value.length !== obj2value.length) return false;

                for (let i = 0; i < obj1value.length; i++) {
                    if (!isEmpty(obj1value[i], obj2value[i])) {
                        return false;
                    }
                }
            } else if (isObjects) {
                if (!isEmpty(obj1value, obj2value)) {
                    return false;
                }
            } else {
                if (obj1value !== obj2value) {
                    return false;
                }
            }
        } else {
            return false;
        }
    }

    return true;
}

// Примеры использования
console.log(isEmpty(redCar, blueCar)); // false
console.log(isEmpty(redCar, greenCar)); // false
console.log(isEmpty(redCar, yellowCar)); // true

