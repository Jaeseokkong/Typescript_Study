var categoryEnum;
(function (categoryEnum) {
    categoryEnum["H"] = "H";
    categoryEnum["K"] = "K";
    categoryEnum["S"] = "S";
})(categoryEnum || (categoryEnum = {}));
var category = categoryEnum.H;
function cate(category) {
    if (category === "H") {
        console.log("5% 할인");
    }
    else if (category === "k") {
        console.log("10% 할인");
    }
    else if (category === "S") {
        console.log("20% 할인");
    }
    else {
        console.log("서버 멈춤");
    }
}
cate(category);
