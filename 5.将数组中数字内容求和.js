function sum(arr) {
    var res = 0;
    if (Array.isArray(arr)) {
        res = arr.reduce(function (prev, curr) {
            if (typeof curr === 'number') {
                return prev + curr;
            }
            return prev;
        }, 0)
    }
    return res;
}
var a = sum([1, 2, 3, 4, 1.2]);
console.log(a)