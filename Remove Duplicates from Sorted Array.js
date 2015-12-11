/**
 * Created by ·« on 2015/12/10.
 */
/**Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

 Do not allocate extra space for another array, you must do this in place with constant memory.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length<2)
        return 1;

    var id=1;
    for(var i=1;i<nums.length;++i){
        if(nums[i]!=nums[i-1])
            nums[id++]=nums[i];
    }
    return id;
};