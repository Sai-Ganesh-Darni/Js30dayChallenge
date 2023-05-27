/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var newarr = [];
    var len = arr.length,c=0;
    for(var i =0;i<len;i++)
    {
        var t=fn(arr[i],i);
        if(t){
            newarr[c++]=arr[i];
        }
    }
    return newarr;
};
