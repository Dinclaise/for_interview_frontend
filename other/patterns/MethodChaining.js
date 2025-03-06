function chainable(value = 0) {
    return {
        add: (num) => {
            console.log(`Adding ${num}`);
            const newValue = value + num;
            return chainable(newValue);
        },

        multiply: (num) => {
            console.log(`Multiplying by ${num}`);
            const newValue = value * num;
            return chainable(newValue);
        },

        subtract: (num) => {
            console.log(`Subtracting ${num}`);
            const newValue = value - num;
            return chainable(newValue);
        },

        getValue: () => {
            console.log("Final value:");
            return value;
        }
    };
}

// Пример использования:
const result = chainable()
    .add(5)
    .multiply(3)
    .subtract(6)
    .getValue();

console.log(result); // 9


// class

class Chainable {
    constructor() {
        this.value = 0; // Начальное значение
    }

    testMethod() {
        console.log("testMethod called");
        this.value += 1; // Модифицируем значение
        return this; // Возвращаем объект для продолжения цепочки
    }

    testMethod2() {
        console.log("testMethod2 called");
        this.value *= 2; // Модифицируем значение
        return this; // Возвращаем объект для продолжения цепочки
    }

    getValue() {
        console.log("getValue called");
        return this.value; // Возвращаем финальное значение
    }
}

// Пример использования:
const a = new Chainable();
const result = a.testMethod().testMethod2().getValue();

console.log(result); // 2

// example
class Chainable {
    constructor() {
        this.value = 0;
    }

    add(num) {
        console.log(`Adding ${num}`);
        this.value += num;
        return this;
    }

    multiply(num) {
        console.log(`Multiplying by ${num}`);
        this.value *= num;
        return this;
    }

    subtract(num) {
        console.log(`Subtracting ${num}`);
        this.value -= num;
        return this;
    }

    getValue() {
        console.log("Final value:");
        return this.value;
    }
}

// Пример использования:
const b = new Chainable();
const result = b.add(5).multiply(3).subtract(6).getValue();

console.log(result); // 9



// function example

const chainable = (() => {
    let value = 0;

    return {
        add: function(num) {
            console.log(`Adding ${num}`);
            value += num;
            return this;
        },

        multiply: function(num) {
            console.log(`Multiplying by ${num}`);
            value *= num;
            return this;
        },

        subtract: function(num) {
            console.log(`Subtracting ${num}`);
            value -= num;
            return this;
        },

        getValue: function() {
            console.log("Final value:");
            return value;
        }
    };
})();

// Пример использования:
const result = chainable.add(5).multiply(3).subtract(6).getValue();

console.log(result); // 9




