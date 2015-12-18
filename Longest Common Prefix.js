/**
 * Created by ·« on 2015/12/12.
 */
/**Write a function to find the longest common prefix string amongst an array of strings.
 */

var longestCommonPrefix = function(strs) {
    if(strs === null || strs.length === 0)    return "";
    var pre = strs[0];
    var i = 1;
    while(i < strs.length){
        while(strs[i].indexOf(pre) !== 0)
            pre = pre.substring(0,pre.length-1);
        i++;
    }
    return pre;
};

var a = "2345";
var b = a.length;
console.log(b);