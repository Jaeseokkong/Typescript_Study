// 명세, 타입, 클래스를 만들때
interface IPerson {
    name : string;
    age : number;
    city? : string;
}

const man : IPerson = {
    name : "jaeseok",
    age : 30
}

// 웹앱
// ----- 경계선 -----
// 서버

function prt(params : IPerson) {
    console.log(params.city ?? 'default city');
    //city가 있는지 없는지 서버에서는 모름
}

prt(man);