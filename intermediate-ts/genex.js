// extends 
// 1
function prt(params, params2) {
    if (typeof params === "string")
        console.log("문자열입니다.");
    else if (typeof params === "number")
        console.log("숫자입니다.");
    if (typeof params2 === "boolean")
        console.log("불리언입니다.");
    else if (typeof params2 === "object")
        console.log("객체입니다.");
}
prt("하하하", true);
prt(123, {});
function execute(params) {
    params.hi("js");
}
execute({ hi: function (name) { console.log("HI!!", name); } });
