const arr1: number[] = [1,2,3] //주로 이형태로 배열 사용
const arr2: Array<number> = [1,2,3]

const arr3: string[] = ["hi", "hello", "world"]
const arr4: Array<string> = ["hi", "hello", "world"]

const arr5 = [1, true, false, "haha", {}];



interface IPerson {
    name : string;
    age : number;
    city? : string;
}

const arr6:IPerson[] = [
    {
        name : "h",
        age : 21
    },
    {
        name : "h",
        age : 21,
        city : "?"
    },
]


//튜플
const arr7: [number, string, object, any[]] = [1, "hi", {}, []];

console.log(arr7)
arr7.push("haha")
console.log(arr7)