/**
 * Created by ·« on 2015/12/10.
 */
/**Given an integer n, return the number of trailing zeroes in n!.
*/
 var trailingZeroes = function(n) {
   var count = 0;

    while(n>=5){
        var rem = parseInt(n/5);
        count += rem;
        n = rem;
    }

    return count;
};
