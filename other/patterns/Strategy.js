// 1. Интерфейс стратегии
class DeliveryStrategy {
    calculateCost(order) {
        throw new Error('Method "calculateCost()" must be implemented');
    }
}

// 2. Конкретные стратегии
class StandardDelivery extends DeliveryStrategy {
    calculateCost(order) {
        return order.basePrice * 1.1; // +10% за стандартную доставку
    }
}

class ExpressDelivery extends DeliveryStrategy {
    calculateCost(order) {
        return order.basePrice * 1.3; // +30% за экспресс-доставку
    }
}

class FreeDelivery extends DeliveryStrategy {
    calculateCost(order) {
        return order.basePrice; // Бесплатная доставка
    }
}

// 3. Контекст
class Order {
    constructor(basePrice, deliveryStrategy) {
        this.basePrice = basePrice;
        this.deliveryStrategy = deliveryStrategy;
    }

    getTotalCost() {
        return this.deliveryStrategy.calculateCost(this);
    }
}

// Использование:
const standardOrder = new Order(100, new StandardDelivery());
console.log(standardOrder.getTotalCost()); // 110

const expressOrder = new Order(100, new ExpressDelivery());
console.log(expressOrder.getTotalCost()); // 130

const freeOrder = new Order(100, new FreeDelivery());
console.log(freeOrder.getTotalCost()); // 100
