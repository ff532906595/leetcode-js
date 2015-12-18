/**
 * Created by ·« on 2015/12/14.
 */
/**Given two strings s and t, determine if they are isomorphic.

 Two strings are isomorphic if the characters in s can be replaced to get t.

 All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

 For example,
 Given "egg", "add", return true.

 Given "foo", "bar", return false.

 Given "paper", "title", return true.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t){
    var map1={}, map2={};

    for (var i=0; i< s.length;i++) {
        if (typeof map1[s[i]] === "undefined" && typeof map2[t[i]] === "undefined"){
            map1[s[i]] = t[i];
            map2[t[i]] = s[i];
        }
        else{
            if(map1[s[i]] !== t[i] && map2[t[i]] !== s[i]){
                return false;
            }
        }
    }
    return true;
}