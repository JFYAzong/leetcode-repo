function firstLetterToUpperCase(str) {
    var res;
    res = str.charAt(0).toUpperCase() + str.substr(1);
    return res;
}
var i = firstLetterToUpperCase('hello');
console.log(i)