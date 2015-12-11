/**
 * Created by ·« on 2015/12/10.
 */
/** Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

 For example:

 Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
 */
var addDigits = function(num) {
    return 1 + (num -1) %9;
};