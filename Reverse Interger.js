/**
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x < 0) return -reverse(-x);

var reversedInt = 0;

while(x>0) {
    var a = x%10;
    x = Math.floor(x/10);

    if(reversedInt >= 214748365)
        return 0;

    reversedInt = reversedInt*10+a;
}

return reversedInt;
};