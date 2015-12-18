/**
 * Created by ·« on 2015/12/17.
 */
/**Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear
 * exactly twice. Find the two elements that appear only once.

 For example:

 Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var two = 0, i;
    for(i = 0; i < nums.length; i++){
        two ^= nums[i];
    }
    var pos = 1;
    two = two.toString(2);
    for(i = two.length - 1; i >= 0; i--){
        if (two[i] === '1'){
            break;
        }
        pos *= 2;
    }
    var half1 = 0, half2 = 0;
    for(i = 0; i < nums.length; i++){
        if(nums[i] & pos){
            half1 ^= nums[i];
        }else{
            half2 ^= nums[i];
        }
    }
    return [half1, half2];
};