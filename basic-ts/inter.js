"use strict";
const man = {
    name: "jaeseok",
    age: 30
};
// 웹앱
// ----- 경계선 -----
// 서버
function prt(params) {
    console.log(params.city);
    //city가 있는지 없는지 서버에서는 모름
}
prt(man);
