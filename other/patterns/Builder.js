// 1. Продукт (конечный объект)
class Pizza {
    constructor() {
        this.dough = '';
        this.sauce = '';
        this.toppings = [];
    }

    describe() {
        return `Pizza with ${this.dough} dough, ${this.sauce} sauce, and toppings: ${this.toppings.join(', ')}`;
    }
}

// 2. Builder (интерфейс для шагов создания)
class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza();
    }

    setDough(dough) {
        this.pizza.dough = dough;
        return this;
    }

    setSauce(sauce) {
        this.pizza.sauce = sauce;
        return this;
    }

    addTopping(topping) {
        this.pizza.toppings.push(topping);
        return this;
    }

    build() {
        return this.pizza;
    }
}

// 3. Director (управление процессом сборки)
class Waiter {
    constructor(builder) {
        this.builder = builder;
    }

    servePepperoniPizza() {
        return this.builder
            .setDough('thin')
            .setSauce('tomato')
            .addTopping('pepperoni')
            .addTopping('cheese')
            .build();
    }

    serveVeggiePizza() {
        return this.builder
            .setDough('thick')
            .setSauce('pesto')
            .addTopping('mushrooms')
            .addTopping('olives')
            .addTopping('onions')
            .build();
    }
}

// Использование:
const builder = new PizzaBuilder();
const waiter = new Waiter(builder);

const pepperoni = waiter.servePepperoniPizza();
console.log(pepperoni.describe());
// "Pizza with thin dough, tomato sauce, and toppings: pepperoni, cheese"

const veggie = waiter.serveVeggiePizza();
console.log(veggie.describe());
// "Pizza with thick dough, pesto sauce, and toppings: mushrooms, olives, onions"
