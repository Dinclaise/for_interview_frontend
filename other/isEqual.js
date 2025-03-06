function deepCompare(o1, o2) {
    if (o1 === o2) return true;
    if (typeof o1 !== 'object' || typeof o2 !== 'object') return false;
    if (Object.keys(o1).length !== Object.keys(o2).length) return false;
    let keys = Object.keys(o1);
    return keys.every(function(key) {
        return deepCompare(o1[key], o2[key]);
    });
};

function deepCompareV2(o1, o2, visited = new Set()) {
    // 1. Проверка на строгое равенство
    if (o1 === o2) return true;

    // 2. Проверка типов
    if (typeof o1 !== 'object' || typeof o2 !== 'object') return false;
    if (o1 === null || o2 === null) return false; // null не является объектом

    // 3. Проверка циклических ссылок
    if (visited.has(o1) && visited.has(o2)) return true;
    visited.add(o1);
    visited.add(o2);

    // 4. Разделение массивов и объектов
    const isArray1 = Array.isArray(o1);
    const isArray2 = Array.isArray(o2);

    // Если один из них массив, а другой нет — они не равны
    if (isArray1 !== isArray2) return false;

    // Если оба массивы, сравниваем их длину и элементы
    if (isArray1 && isArray2) {
        if (o1.length !== o2.length) return false;
        for (let i = 0; i < o1.length; i++) {
            if (!deepCompare(o1[i], o2[i], visited)) return false;
        }
        return true;
    }

    // 5. Сравнение объектов
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);

    // Если количество ключей различается, объекты не равны
    if (keys1.length !== keys2.length) return false;

    // Проверяем, что все ключи первого объекта существуют во втором
    for (const key of keys1) {
        if (!keys2.includes(key)) return false;
        if (!deepCompare(o1[key], o2[key], visited)) return false;
    }

    return true;
}


function isEqual(obj1, obj2) {
    // Если оба значения — примитивы, сравниваем их напрямую
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return obj1 === obj2;
    }

    // Если один из объектов — массив, а другой — нет, они не равны
    if (Array.isArray(obj1) !== Array.isArray(obj2)) {
        return false;
    }

    // Если оба объекта — массивы
    if (Array.isArray(obj1)) {
        if (obj1.length !== obj2.length) return false; // Разные длины — не равны
        for (let i = 0; i < obj1.length; i++) {
            if (!isEqual(obj1[i], obj2[i])) return false; // Рекурсивно сравниваем элементы
        }
        return true;
    }

    // Если оба объекта — объекты
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Если количество ключей разное, объекты не равны
    if (keys1.length !== keys2.length) return false;

    // Проверяем, что все ключи и их значения совпадают
    for (const key of keys1) {
        if (!keys2.includes(key) || !isEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}



const redCar = {
    wheels: 4,
    brake: 4,
    speed: 180,
    options: [
        { optionKey: "123-234-345", optionName: "color" },
        { optionKey: "234-345-987", optionName: "warranty" }
    ]
};

const yellowCar = {
    wheels: 3,
    brake: 2,
    speed: 70,
    options: [
        { optionKey: "665-232-345", optionName: "isBroken" },
        { optionKey: "234-345-987", optionName: "warranty" }
    ]
};

const blueCar = {
    wheels: 4,
    brake: 4,
    speed: 180,
    options: [
        { optionKey: "123-234-345", optionName: "isBroken" },
        { optionKey: "234-345-987", optionName: "warranty" }
    ]
};

const greenCar = {
    wheels: 4,
    brake: 4,
    speed: 180,
    options: [
        { optionKey: "123-234-345", optionName: "color" },
        { optionKey: "234-345-987", optionName: "warranty" }
    ]
};

// console.log(isEqual(redCar, yellowCar)); // false
// console.log(isEqual(redCar, blueCar));   // false
// console.log(isEqual(redCar, greenCar));  // true


console.log(deepCompare(redCar, yellowCar)); // false
console.log(deepCompare(redCar, blueCar));   // false
console.log(deepCompare(redCar, greenCar));  // true
