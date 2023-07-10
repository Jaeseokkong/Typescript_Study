interface ICity {
    name : string;
}

interface ISchool extends ICity{
    year : number;
}

console.log(false ? "truevalue" : "failvalue");
type ConditionType = ISchool extends ICity ? number : string;
//const test : ConditionType  = "hi";
const test : ConditionType  = 123;