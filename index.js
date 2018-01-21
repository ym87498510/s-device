var ua = navigator.userAgent
console.log(ua)
var isIos = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1
var system = isIos ? 'iOS' : isAndroid ? 'Android' : 'Unknow System'
var model = 'Unknow Model'
if (isIos) {
    model = ua.match(/(?<=CPU\s).*?(?=like)/)[0]
} else if (isAndroid) {
    model = ua.match(/(?<=(Linux;\s)).*?(?=\s?Build)/)[0]
}
var isWechat = !!navigator.userAgent.match(/MicroMessenger/i)
export default {
    system,
    model,
    isAndroid,
    isIos,
    isWechat
}