let postorderTraversal = function(root) {
    if (!root) return [];

    const stack = [root]; // Инициализируем стек с корневым узлом
    const result = [];
    const visited = new Set(); // Отслеживаем посещенные узлы

    while (stack.length > 0) {
        const node = stack[stack.length - 1]; // Смотрим верхний элемент стека

        // Если узел уже посещен, добавляем его значение в результат
        if (visited.has(node)) {
            result.push(stack.pop().val);
            continue;
        }

        // Помечаем узел как посещенный
        visited.add(node);

        // Добавляем детей в стек в обратном порядке (правый, затем левый)
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return result;
};

//recursive
let postorderTraversalR = function(root) {
    const result = [];

    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        dfs(node.right);
        result.push(node.val);
    }

    dfs(root);
    return result;
};


//examples

const tree1 = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: { val: 3, left: null, right: null },
        right: null
    }
};

console.log(postorderTraversal(tree1));
// Вывод: [3, 2, 1]

const tree2 = {
    val: 1,
    left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: { val: 6, left: null, right: null }, right: { val: 7, left: null, right: null } }
    },
    right: {
        val: 3,
        left: null,
        right: { val: 8, left: null, right: { val: 9, left: null, right: null } }
    }
};

console.log(postorderTraversal(tree2));
// Вывод: [4, 6, 7, 5, 2, 9, 8, 3, 1]
