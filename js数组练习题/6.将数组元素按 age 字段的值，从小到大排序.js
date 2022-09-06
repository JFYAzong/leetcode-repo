function sortAge(arr) {
    var res = 0;
    if (Array.isArray(arr)) {
        res = arr.sort(function (a, b) {
            return a.name < b.name ? -1 : 1
        })
    }
    return res;
}
var a = sortAge([
    { age: 19, name: 'Jack' },
    { age: 5, name: 'Apple' },
    { age: 12, name: 'Lynn' },
    { age: 25, name: 'David' }
]);
console.log(a)