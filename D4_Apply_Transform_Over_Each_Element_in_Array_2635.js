/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var arr1 = [];
    for(var i=0;i<arr.length;i++)
    {
        arr1[i] = fn(arr[i],i);
    }
    return arr1;
};
