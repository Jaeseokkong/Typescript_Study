function printType(params) {
    console.log(typeof params);
}
printType("아무거나");
printType(23);
printType({});
// function prt(params : IGene<string>){
//     console.log(params.data);
// }
function prt(params) {
    console.log(params.data);
}
prt({ data: [123, 456, 789], name: 'js' });
