function trim(str) {
    var res;
    res = str.replace(/^\s+/g, '').replace(/\s+$/g, '');
    return res;
}
var i = trim('  ab c   ');
console.log(i)