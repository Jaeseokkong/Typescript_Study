// 1. null undefined 같은 ㄱ밧
const un: undefined = undefined;

// 2. undefined 2개가 있다.

// 3. 최하위 계층이다.
interface IMan {
    name : string;
}

function printName(params: IMan){
    console.log("printName on!");
    console.log(params?.name ?? "default value")
}

//printName({name : "jaesoek"})
//printName(undefined);