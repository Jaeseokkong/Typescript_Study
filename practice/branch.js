function getLogic(p) {
    // admin manager user
    //누가 가져오느냐에 다라 내려가는 것을 다르게
    switch (p.type) {
        case "admin":
            console.log("post 불러오기", p.post);
            console.log("info 불러오기", p.info);
            console.log("detail 불러오기", p.detail);
            break;
        case "manager":
            console.log("post 불러오기", p.post);
            console.log("info 불러오기", p.info);
            break;
        case "user":
            console.log("post만", p.post);
            break;
    }
}
getLogic({
    type: "admin",
    post: "post 불러오는 로직 발동!",
    info: "info 불러오는 로직 발동!",
    detail: "detail 불러오는 로직 발동!"
});
function errorHandler(p) {
    // admin manager user
    //누가 가져오느냐에 다라 내려가는 것을 다르게
    switch (p.code) {
        case 404:
            console.log(p.notFoundFunc);
            break;
        case 500:
            console.log(p.interFunc);
            break;
    }
}
errorHandler({
    code: 404,
    notFoundFunc: "404 not found 에러분기 코드 발동"
});
errorHandler({
    code: 500,
    interFunc: "500 에러분기 코드 발동"
});
