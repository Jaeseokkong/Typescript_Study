type userType = "admin" | "manager" | "user";

interface IAdmin {
    type : userType,
    post : any,
    info : any,
    detail : any,
}

interface IManager {
    type : userType,
    post : any,
    info : any,
}

interface IUser {
    type : userType,
    post : any,
}


function getLogic(p: IAdmin | IManager | IUser){
    // admin manager user
    //누가 가져오느냐에 다라 내려가는 것을 다르게

    switch(p.type){
        case  "admin" :
            console.log("post 불러오기", (p as IAdmin).post)
            console.log("info 불러오기", (p as IAdmin).info)
            console.log("detail 불러오기", (p as IAdmin).detail)
            break;
        case "manager" :
            console.log("post 불러오기", (p as IManager).post)
            console.log("info 불러오기", (p as IManager).info)
            break;
        case "user" :
            console.log("post만", p.post)
            break;
    }
}

getLogic({
    type : "admin" , 
    post : "post 불러오는 로직 발동!",
    info : "info 불러오는 로직 발동!",
    detail : "detail 불러오는 로직 발동!"
})

type errorCode = 404 | 500;
interface I_NOT_FOUND {
    code : errorCode;
    notFoundFunc : any; 
} 
interface I_INTER_ERROR {
    code : errorCode;
    interFunc : any; 
} 


function errorHandler(p: I_NOT_FOUND | I_INTER_ERROR){
    // admin manager user
    //누가 가져오느냐에 다라 내려가는 것을 다르게

    switch(p.code){
        case  404 :
            console.log((p as I_NOT_FOUND).notFoundFunc)
            break;
        case 500:
            console.log((<I_INTER_ERROR>p).interFunc)
            break;

    }
}

errorHandler({
    code : 404,
    notFoundFunc : "404 not found 에러분기 코드 발동"
})

errorHandler({
    code : 500,
    interFunc : "500 에러분기 코드 발동"
})