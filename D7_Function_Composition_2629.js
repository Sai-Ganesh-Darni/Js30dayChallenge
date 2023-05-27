/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	var len = functions.length;
    return function(x) {
        var val=x;
        for(var i=len-1;i>=0;i--)
        {
            val = functions[i](val);
        }
        return val;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
