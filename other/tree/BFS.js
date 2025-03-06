// Обход в ширину (BFS)
// Принцип работы:
//     BFS начинает с корневого узла и обходит все узлы на текущем уровне, прежде чем переходить к следующему уровню.
//     Для реализации используется очередь (FIFO) .

function bfs(root) {
    if (!root) return;

    const queue = [root]; // Инициализируем очередь с корневым узлом

    while (queue.length > 0) {
        const currentNode = queue.shift(); // Извлекаем первый элемент из очереди
        console.log(currentNode.value); // Посещаем узел

        // Добавляем всех детей текущего узла в очередь
        for (const child of currentNode.children) {
            queue.push(child);
        }
    }
}


const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 4, children: [] },
                { value: 5, children: [] }
            ]
        },
        {
            value: 3,
            children: [
                { value: 6, children: [] },
                { value: 7, children: [] }
            ]
        }
    ]
};
