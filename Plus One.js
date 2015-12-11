/**
 * Created by ·« on 2015/12/10.
 */
/**Given a non-negative number represented as an array of digits, plus one to the number.

 The digits are stored such that the most significant digit is at the head of the list.
 */

var plusOne = function(digits) {
    for(var i = digits.length - 1; i >= 0; i--){
        if(++digits[i] > 9) digits[i] = 0;
        else return digits;
    }
    digits.unshift(1);
    return digits;
};
