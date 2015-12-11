/**
 * Created by ·« on 2015/12/10.
 */
/**Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) {
        return true;
    }

    return helper(root.left, root.right);
};

var helper = function(a,b) {
    if (a === null && b === null) return true;
    if (a === null || b === null) return false;  // only one has node in a tree and b tree
    if (a.val != b.val) return false;
    return helper(a.left, b.right) && helper(a.right, b.left); // a goes in in-order traversal, b goes right first then left.

};