function uniq(arr) {
    var res = [];
    arr.forEach(function (el) {
        if (res.indexOf(el) === -1) {
            res.push(el);
        }
    })
    return res;
}
var i = uniq([1,2,2,3,4,4,4,4]);
var j = uniq([1,2,'m','e','r','r','y']);
console.log(i,j)