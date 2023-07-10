// interface IData<T>{
//     data : string | number;
// }
//2
function returnParams(params) {
    return params;
}
returnParams("hi");
returnParams(10);
returnParams(true);
//3 
var rP = returnParams;
function prtKey(params, key) {
    console.log(params[key]);
    return params[key];
}
prtKey({ name: "js", age: 10 }, "name");
prtKey({ city: "seoul", phone: "01011111111" }, "name");
