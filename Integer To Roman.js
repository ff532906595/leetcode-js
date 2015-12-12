/**
 * Created by ·« on 2015/12/11.
 */
/**Given an integer, convert it to a roman numeral.

 Input is guaranteed to be within the range from 1 to 3999.
 */
var intToRoman = function(num) {
    var M = ["", "M", "MM", "MMM"];
    var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return M[parseInt(num/1000)] + C[parseInt((num%1000)/100)] + X[parseInt((num%100)/10)] + I[parseInt(num%10)];
};

var a, b, c = {};
a = [];


console.log(typeof(null),typeof(b),typeof(c));