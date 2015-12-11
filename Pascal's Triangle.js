/**
 * Created by ·« on 2015/12/10.
 */

var generate = function(numRows) {
    var res = [], count = 0, row;
    while(numRows--){
        row = [1];
        if(count !== 0){
            pre = res[count - 1];
            for(i = 1; i < count; i++){
                row.push(pre[i - 1] + pre[i]);
            }
            row.push(1);
        }
        res.push(row);
        count++;
    }
    return res;
};