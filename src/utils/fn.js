// 操作数据的一些方法
let arr_in = function(arr, shan) {
    var zhi = arr.findIndex(function (value, index, arr) {
        return value == shan;
    });
    if (zhi == -1) {
        return false;
    } else {
        return true;
    }
}

export default {arr_in}



