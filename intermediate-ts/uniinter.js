// 1. union 합집합 | (OR)
var nameOrAge;
nameOrAge = "jeasoek";
nameOrAge = 25;
function prtUnion(params) {
    // name 정보가 들어왔을 때 로직
    if ("name" in params) {
        console.log(params.name);
    }
    // age 정보가 들어왔을 때 로직
    if ("age" in params) {
        console.group(params.age);
    }
}
//prtUnion({name : "jaeseokking"})
prtUnion({ age: 10 });
function search(params) {
    console.log(params.age + " " + params.name);
}
search({ age: 10, name: "JS" });
