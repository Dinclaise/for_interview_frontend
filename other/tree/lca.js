/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    // Helper function to calculate depth and find LCA
    function dfs(node) {
        if (!node) return [0, null]; // [depth, lca]

        const [leftDepth, leftLCA] = dfs(node.left);
        const [rightDepth, rightLCA] = dfs(node.right);

        if (leftDepth > rightDepth) {
            // Left subtree is deeper, propagate its result
            return [leftDepth + 1, leftLCA];
        } else if (rightDepth > leftDepth) {
            // Right subtree is deeper, propagate its result
            return [rightDepth + 1, rightLCA];
        } else {
            // Both subtrees have the same depth, current node is the LCA
            return [leftDepth + 1, node];
        }
    }

    // Start DFS from the root and return the LCA
    return dfs(root)[1];
};
