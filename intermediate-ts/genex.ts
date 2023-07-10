// extends 


// 1
function prt<T extends string | number, U extends boolean | object>(params : T, params2 : U){
    if(typeof params === "string") console.log("문자열입니다.")
    else if (typeof params === "number") console.log("숫자입니다.")

    if(typeof params2 === "boolean") console.log("불리언입니다.")
    else if (typeof params2 === "object") console.log("객체입니다.")
}

prt<string, boolean>("하하하", true);
prt<number, object>(123, {})

//2 
interface IHi{
    hi : (name : string) => void
}

function execute<T extends IHi>(params : T){
    params.hi("js");
}

execute({ hi(name : string){console.log("HI!!", name)}});