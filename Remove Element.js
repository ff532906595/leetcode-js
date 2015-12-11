/**
 * Created by ·« on 2015/12/10.
 */
/**Given an array and a value, remove all instances of that value in place and return the new length.

 The order of elements can be changed. It doesn't matter what you leave beyond the new length.

 /**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var begin=0;
    for(var i=0;i<nums.length;i++) if(nums[i]!=val) nums[begin++]=nums[i];
    return begin;
};