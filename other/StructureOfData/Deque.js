class Deque {
    constructor() {
        this.items = [];
    }

    // Добавление элемента в начало
    addFront(item) {
        this.items.unshift(item);
    }

    // Добавление элемента в конец
    addBack(item) {
        this.items.push(item);
    }

    // Удаление элемента с начала
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift();
    }

    // Удаление элемента с конца
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }

    // Возвращает элемент с начала
    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }

    // Возвращает элемент с конца
    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }

    // Проверка на пустоту
    isEmpty() {
        return this.items.length === 0;
    }

    // Количество элементов в очереди
    size() {
        return this.items.length;
    }
}

// Пример использования Deque
const deque = new Deque();
deque.addBack(1);
deque.addBack(2);
deque.addFront(0);
console.log(deque.peekFront()); // 0
console.log(deque.peekBack()); // 2
deque.removeFront(); // удаляет 0
deque.removeBack(); // удаляет 2
console.log(deque.size()); // 1
