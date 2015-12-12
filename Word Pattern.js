/**
 * Created by ·« on 2015/12/12.
 */
/**Given a pattern and a string str, find if str follows the same pattern.

 Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

 Examples:
 pattern = "abba", str = "dog cat cat dog" should return true.
 pattern = "abba", str = "dog cat cat fish" should return false.
 pattern = "aaaa", str = "dog cat cat dog" should return false.
 pattern = "abba", str = "dog dog dog dog" should return false.
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var myArr=str.split(' ');
    var myPattern=pattern.split('');
    if(pattern.length != myArr.length){
        return false;
    }
    for(var i=0;i<pattern.length;i++){
        for(var j=0;j<pattern.length;j++)
        {
            if(myPattern[i] == myPattern[j]){
                if(myArr[i] != myArr[j]){
                    return false;
                }
            }else{
                if(myArr[i] == myArr[j]){
                    return false;
                }
            }
        }
    }
    return true;
};

console.log(wordPattern("abba","dog cat cat dog"));