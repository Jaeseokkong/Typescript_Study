//const testTest = document.querySelector("#someText")!;

// const testTest = document.querySelector("#someText") as HTMLElement;
// console.log((testTest as HTMLElement).id);


interface IExam {
    value : number
}
const example : object = { value : 1 };
//console.log(example.value);


//단언 방법

//1. as
console.log((example as IExam).value);

//2. <>
console.log((<IExam>example).value);