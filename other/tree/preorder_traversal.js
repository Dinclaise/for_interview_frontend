// recursive
let preorderTraversalR = function(root) {
    const result = [];

    function dfs(node) {
        if (!node) return;

        // Посещаем текущий узел
        result.push(node.val);

        // Рекурсивно обходим левое поддерево
        dfs(node.left);

        // Рекурсивно обходим правое поддерево
        dfs(node.right);
    }

    dfs(root);
    return result;
};


//iterative

let preorderTraversal = function(root) {
    if (!root) return [];

    const stack = [root]; // Инициализируем стек с корневым узлом
    const result = [];

    while (stack.length > 0) {
        const node = stack.pop(); // Извлекаем узел из стека
        result.push(node.val); // Посещаем узел

        // Добавляем правого потомка в стек (если он существует)
        if (node.right) {
            stack.push(node.right);
        }

        // Добавляем левого потомка в стек (если он существует)
        if (node.left) {
            stack.push(node.left);
        }
    }

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

console.log(preorderTraversal(tree1));
// Вывод: [1, 2, 3]

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

console.log(preorderTraversal(tree2));
// Вывод: [1, 2, 4, 5, 6, 7, 3, 8, 9]

