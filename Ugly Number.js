/**
 * Created by ·« on 2015/12/10.
 */
/**Write a program to check whether a given number is an ugly number.

 Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

 Note that 1 is typically treated as an ugly number.
*/
 var isUgly = function(num) {
    if (num > 1)
    for (var i=2; i<6; i++)
        while (num % i === 0)
            num /= i;
return num == 1;
};