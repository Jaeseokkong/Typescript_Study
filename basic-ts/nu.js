// 1. null undefined 같은 ㄱ밧
var un = undefined;
function printName(params) {
    var _a;
    console.log("printName on!");
    console.log((_a = params === null || params === void 0 ? void 0 : params.name) !== null && _a !== void 0 ? _a : "default value");
}
//printName({name : "jaesoek"})
printName(undefined);
