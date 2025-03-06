const tree = {
    val: 1,
    left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
};

function treePaths(root) {
    const result = [];

    function dfs(node, currentPath) {
        if (!node) return;

        // Добавляем текущее значение узла к пути
        currentPath += (currentPath ? '-' : '') + node.val;

        // Если это листовой узел, добавляем путь в результат
        if (!node.left && !node.right) {
            result.push(currentPath);
            return;
        }

        // Рекурсивно обходим левое поддерево
        if (node.left) {
            dfs(node.left, currentPath);
        }

        // Рекурсивно обходим правое поддерево
        if (node.right) {
            dfs(node.right, currentPath);
        }
    }

    // Начинаем обход с корневого узла
    dfs(root, '');

    return result;
}

