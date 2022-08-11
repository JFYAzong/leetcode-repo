var arr = [1, 2, 3, 4];
function putFirst(arr, n) {
    if (Array.isArray(arr)) {
        var item = arr.splice(n, 1)[0];
    }
}