/**
 * Created by ·« on 2015/12/11.
 */
/**Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array

such that nums[i] = nums[j] and the difference between i and j is at most k.
 *//**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
        if(k <= 0){
            return false;
        }

        if(nums === null || nums.length === 0){
            return false;
        }

        var hash = [];
        for(var i = 0; i < nums.length; i++){
            var val = nums[i];
            if(hash[val] !== undefined){
                if((i - hash[val]) <= k){
                    return true;
                } else {
                    hash[val] = i;
                }
            } else {
                hash[val] = i;
            }
        }
        return false;
    };
