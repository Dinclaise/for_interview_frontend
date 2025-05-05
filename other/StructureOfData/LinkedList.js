class Node {
    constructor(value) {
        this.value = value; // Значение узла
        this.next = null;   // Ссылка на следующий узел
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Указатель на первый узел
        this.tail = null; // Указатель на последний узел
        this.length = 0;  // Размер списка
    }

    // Добавление элемента в конец списка
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            // Если список пуст, новый узел становится head и tail
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Иначе добавляем новый узел в конец
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    // Добавление элемента в начало списка
    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            // Если список пуст, новый узел становится head и tail
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Иначе новый узел становится первым
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    // Удаление элемента по значению
    delete(value) {
        if (!this.head) return; // Если список пуст, ничего не делаем

        // Если удаляемый элемент — это head
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
            this.length--;
        }

        let current = this.head;

        // Проходим по списку и удаляем все совпадения
        while (current && current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                this.length--;
            } else {
                current = current.next;
            }
        }

        // Обновляем tail, если нужно
        if (this.tail && this.tail.value === value) {
            this.tail = current;
        }
    }

    // Поиск элемента по значению
    find(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return current; // Возвращаем найденный узел
            }
            current = current.next;
        }

        return null; // Если элемент не найден
    }

    // Вывод всех элементов списка
    print() {
        const result = [];
        let current = this.head;

        while (current) {
            result.push(current.value);
            current = current.next;
        }

        console.log(result.join(" -> "));
    }

    // Получение размера списка
    size() {
        return this.length;
    }
}

// Пример использования
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.print(); // 5 -> 10 -> 20 -> 30
console.log("Size:", list.size()); // Size: 4

list.delete(20);
list.print(); // 5 -> 10 -> 30
console.log("Size:", list.size()); // Size: 3

console.log(list.find(10)); // Node { value: 10, next: Node { value: 30, next: null } }
