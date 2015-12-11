/**
 * Created by ·« on 2015/12/10.
 */
/**
 Given an array of integers, find if the array contains any duplicates.
 Your function should return true if any value appears at least twice in the array,
 and it should return false if every element is distinct.
 /**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length < 2){
        return false;
    }

    nums = nums.sort();
    for (var i=0;i<nums.length-1;i++){
        if (nums[i] == nums[i+1]){
            return true;
        }
        return false;
    }
};