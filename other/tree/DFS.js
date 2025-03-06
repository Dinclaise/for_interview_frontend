// Обход в глубину (DFS)
// Принцип работы:
//     DFS начинает с корневого узла и "углубляется" в дерево, посещая дочерние узлы до тех пор, пока не достигнет конца ветки.
//     После этого алгоритм возвращается к предыдущему узлу и продолжает обход других веток.
//     DFS может быть реализован двумя способами:
//     Рекурсивно (естественный подход).
// Итеративно (с использованием стека).


// recursive
function dfsRecursive(node) {
    if (!node) return;

    // Посещаем текущий узел
    console.log(node.value);

    // Рекурсивно обходим всех детей
    for (const child of node.children) {
        dfsRecursive(child);
    }
}

// iterative
function dfsIterative(root) {
    if (!root) return;

    const stack = [root]; // Инициализируем стек с корневым узлом

    while (stack.length > 0) {
        const currentNode = stack.pop(); // Извлекаем последний элемент из стека
        console.log(currentNode.value); // Посещаем узел

        // Добавляем детей в стек (в обратном порядке)
        for (let i = currentNode.children.length - 1; i >= 0; i--) {
            stack.push(currentNode.children[i]);
        }
    }
}
