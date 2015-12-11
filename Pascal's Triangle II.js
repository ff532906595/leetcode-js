/**
 * Created by ·« on 2015/12/10.
 */
/**Given an index k, return the kth row of the Pascal's triangle.

 For example, given k = 3,
 Return [1,3,3,1].
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === null || rowIndex < 0){
        return [];
    }

    var result = [1];

    for(var i = 1; i <= rowIndex; i++){
        var cur = [];

        for(var j = 0; j <= i; j++){
            cur[j] = (result[j - 1] || 0) + (result[j] || 0);
        }

        result = cur;
    }

    return result;
};