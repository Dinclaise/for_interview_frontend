class Stack {
    constructor() {
        this.items = [];
    }

    // Добавление элемента на вершину стека
    push(item) {
        this.items.push(item);
    }

    // Удаление элемента с вершины стека
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }

    // Возвращение элемента с вершины стека
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }

    // Проверка на пустоту
    isEmpty() {
        return this.items.length === 0;
    }

    // Количество элементов в стеке
    size() {
        return this.items.length;
    }
}

// Пример использования Stack
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // 3
stack.pop(); // удаляет 3
console.log(stack.peek()); // 2
console.log(stack.size()); // 2
