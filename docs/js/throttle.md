# 节流函数

::: tip
节流函数在页面滚动、拖动和数据上报等场景应用广泛，用于控制回调函数触发的频率。
:::

```javascript
//函数节流
/**
 * @param {[Function]} method 函数名[必选]
 * @param  {[Int]} _delay  延迟执行毫秒数
 * @param  {[Int]} _duration  每隔_duration必执行一次
 * @example
 *      const calcThrottle = (new throttle()).run(calc, 2000, 2000);
 *      calcThrottle({calc: 'calc函数的入参'})
 *      
*/
const throttleFn = function () {
    var self = this;
    self.begin = 0; //可以在new之后，调用就可以立即执行，不用等一个_duration的时间
    self.throttle_sid = null;
}
throttleFn.prototype.runThrottle = function (method, _delay, _duration) {
    if (typeof method == "function") {
        var self = this;
        var duration = _duration || 3000; //时间阈值
        var delay = _delay || 600;  //延迟ms
        return function () {
            var context = this, args = arguments;
            var current = (new Date()).getTime();
            clearTimeout(self.throttle_sid);
            if (current - self.begin >= duration) {
                method.apply(context, args);
                self.begin = current;
            } else {
                self.throttle_sid = setTimeout(function () {
                    method.apply(context, args);
                }, delay);
            }
        }
    }
    
}

//使用示例
const sendJsLoggerThrottle = (new throttle()).runThrottle(sendJsLogger, 2000, 2000);
sendJsLoggerThrottle('msg');
```

[参考](https://keelii.com/2016/06/11/javascript-throttle/)