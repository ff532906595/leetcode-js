/**
 * Created by ·« on 2015/12/10.
 */
/**
 Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

 For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var flag = 0;

    for(var i = 0; i < nums.length; i++){

        if(nums[i] !== 0){
            if(flag != i){
                nums[flag] = nums[i];
                nums[i] = 0;
            }
            flag++;
        }

    }
};
