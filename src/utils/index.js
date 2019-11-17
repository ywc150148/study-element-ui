// xx.js文件
var tools = {}
tools.addNum = function (x, y) {
    return x * y
}


/**
 * 格式化时间
 * @param params
 * @param blo 默认为true
 * @returns {string}
 * @constructor xx 2019年6月12日11点01分
 */
tools.TimeConversion = function (params, blo = true) {
    var stamp = Date.parse(params);
    var newDate = new Date(stamp);
    var year = newDate.getFullYear();
    var month = newDate.getMonth() + 1;
    var date = newDate.getDate();
    var h = newDate.getHours();
    var m = newDate.getMinutes();
    var s = newDate.getSeconds();
    if (blo)
        return year + '-' + getNow(month) + "-" + getNow(date);
    return year + '-' + getNow(month) + "-" + getNow(date) + " " + getNow(h) + ':' + getNow(m) + ":" + getNow(s);
}

/**
 * 获取窗口可视高度
 * @returns {number}
 */
tools.getClientHeight = function () {
    return document.documentElement.clientHeight || document.body.clientHeight;
}


tools.install = function (Vue, options) {
    Vue.prototype.$tools = tools
    Vue.tools = tools
}
export default tools