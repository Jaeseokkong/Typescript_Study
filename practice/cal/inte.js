var car = { speed: 0, name: '' };
var carProxy = new Proxy(car, {
    get: function (target, p) {
        console.log("get", target, p);
    },
    set: function (target, p, newValue) {
        console.log("set", target, p, newValue);
        return true;
    }
});
carProxy.speed = 30;
console.log(carProxy.speed);
