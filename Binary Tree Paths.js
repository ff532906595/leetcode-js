/**
 * Created by ·« on 2015/12/13.
 */
/**Given a binary tree, return all root-to-leaf paths.

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var res = [];
    if(root && root.val !== undefined){
        getPaths(root, "");
    }
    return res;

    function getPaths(node, path){
        var isLeaf = true;
        if(node.left){
            isLeaf = false;
            getPaths(node.left, path + "->" + node.val);
        }
        if(node.right){
            isLeaf = false;
            getPaths(node.right, path + "->" + node.val);
        }
        if(isLeaf){
            var tmp = path + "->" + node.val;
            res.push(tmp.substring(2, tmp.length));
        }
    }
};