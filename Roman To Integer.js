/**
 * Created by ·« on 2015/12/10.
 */
/**Given a roman numeral, convert it to an integer.

 Input is guaranteed to be within the range from 1 to 3999.

 /**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var res = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        var c = s.charAt(i);
        switch (c) {
            case 'I':
                res += (res >= 5 ? -1 : 1);
                break;
            case 'V':
                res += 5;
                break;
            case 'X':
                res += 10 * (res >= 50 ? -1 : 1);
                break;
            case 'L':
                res += 50;
                break;
            case 'C':
                res += 100 * (res >= 500 ? -1 : 1);
                break;
            case 'D':
                res += 500;
                break;
            case 'M':
                res += 1000;
                break;
        }
    }
    return res;
};

console.log(romanToInt("IV"));