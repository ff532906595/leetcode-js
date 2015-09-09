/** Implement atoi to convert a string to an integer.

 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
};