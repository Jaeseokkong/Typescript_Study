// 1. union 합집합 | (OR)
let nameOrAge : string | number;
nameOrAge = "jeasoek";
nameOrAge = 25;

interface IName {
    name : string;
}
interface IAge {
    age : number;
}

type MyType = IName | IAge;


function prtUnion(params : MyType){
    // name 정보가 들어왔을 때 로직
    if("name" in params){
        console.log(params.name)
    }

    // age 정보가 들어왔을 때 로직
    if("age" in params){
        console.group(params.age)
    }
}

//prtUnion({name : "jaeseokking"})
prtUnion({age : 10})

//2. intersection 교집합 & (AND)
interface IName2 {
    name : string;
}

interface IAge2 {
    age : number;
}

type ForSearch = IName2 & IAge;

function search(params : ForSearch){
    console.log(params.age + " " + params.name);
}

search({age : 10 , name : "JS"})
