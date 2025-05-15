const tree2 = {
    val: 1,
    left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: {
            val: 5,
            left: { val: 6, left: null, right: null },
            right: { val: 7, left: null, right: null }
        }
    },
    right: {
        val: 3,
        left: null,
        right: {
            val: 8,
            left: null,
            right: { val: 9, left: null, right: null }
        }
    }
};

// recursive
function inOrderTraversal(root) {
    const result = [];

    function traverse(node) {
        if (!node) return;

        traverse(node.left); // 1. Обходим левое поддерево
        result.push(node.val); // 2. Добавляем значение узла
        traverse(node.right); // 3. Обходим правое поддерево
    }

    traverse(root);
    return result;
}


// stack
function inOrderTraversalIterative(root) {
    const result = [];
    const stack = [];
    let current = root;

    while (current || stack.length > 0) {
        // 1. Идём влево до самого левого узла
        while (current) {
            stack.push(current);
            current = current.left;
        }

        // 2. Берём последний узел из стека
        current = stack.pop();
        result.push(current.val);

        // 3. Переходим к правому поддереву
        current = current.right;
    }

    return result;
}

console.log(inOrderTraversal(tree2)); // [4, 2, 6, 5, 7, 1, 3, 8, 9]
console.log(inOrderTraversalIterative(tree2)); // [4, 2, 6, 5, 7, 1, 3, 8, 9]
