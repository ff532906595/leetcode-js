/**
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var length;

    do {
        length = s.length;
        s = s.replace("()", "").replace("{}", "").replace("[]", "");
    } while(length != s.length);

    return s.length === 0;

};

