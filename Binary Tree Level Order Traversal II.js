/**
 * Created by ·« on 2015/12/10.
 */
/**Given a binary tree, return the bottom-up level order traversal of its nodes' values.

(ie, from left to right, level by level from leaf to root).
 */

var levelOrderBottom = function(root) {
    var res = [], queue = [root];
    traversal();
    return res;

    function traversal(){
        var top, len = queue.length, subRes = [];
        while(len--){
            top = queue.shift();
            if(top !== null && top.val !== undefined){
                subRes.push(top.val);
                queue.push(top.left);
                queue.push(top.right);
            }
        }
        if(subRes.length > 0){
            res.unshift(subRes);
        }
        if(queue.length > 0){
            traversal();
        }
    }
};