/**
 * Created by ·« on 2015/12/13.
 */
/**Given an integer array nums, find the sum of the elements between indices i and j (i ¡Ü j), inclusive.

 /**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.dict = [];
    var sum = 0;
    for(var i = 0; i < nums.length; i++){
        sum += nums[i];
        this.dict[i] = sum;
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if(i === 0){
        return this.dict[j];
    }else{
        return this.dict[j] - this.dict[i - 1];
    }
};