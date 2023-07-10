var IDetail = /** @class */ (function () {
    function IDetail(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    return IDetail;
}());
function setUser(target, param, newValue) {
    if (param === "marketing" && typeof newValue == "boolean")
        target[param] = newValue;
    else if (param === "detail" && newValue instanceof IDetail)
        target[param] = newValue;
    else if (param === "sns" && typeof newValue === "string") {
        var v = newValue;
        target[param] = v;
    }
}
var detail = new IDetail("jaeseok", 30, "seoul");
var user = {
    detail: detail,
    marketing: true,
    sns: "KAKAO"
};
console.log(user);
setUser(user, "sns", "NAVER");
setUser(user, "detail", new IDetail("jaeseok2", 10, "seoul"));
console.log(user);
