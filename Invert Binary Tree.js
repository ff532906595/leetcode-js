/**
 * Created by ·« on 2015/12/10.
 */
var invertTree = function(root) {
    if (!root || root.left === null && root.right === null) {
        return root;
    }

    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};