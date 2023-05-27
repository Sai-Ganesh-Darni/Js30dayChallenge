/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    var len = nums.length;
    var val=init;
    for(var i=0;i<len;i++)
    {
        val = fn(val,nums[i]);
    }
    return val;
};
