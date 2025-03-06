function sumOfTree(tree) {
    const stack = [tree];
    let sum = 0;

    while(stack.length > 0) {
        let node = stack.pop();
        sum += node.val;

        if (node.children && node.children.length > 0) {
            for (let n of node.children) {
                stack.push(n);
            }
        }
    }

    return sum;
}
