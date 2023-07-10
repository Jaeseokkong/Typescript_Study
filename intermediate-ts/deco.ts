// f(g(x)) ----> f () { return g () } , g : 데코레이터 함수
// g ----> f(g(x)) , f : 데코레이터 팩토리(목적 : 인자전달, param 전달)


// 1. 데코레이터는 함수다
 function Controller(constructor : {new (email : string) : any}) : any{
    console.log("Controller : " , constructor);

    //데코레이터 함수
    return class extends constructor {
        _email = 'js@inflearn.com';
        _name = "js";
        _age = 10
    }
}

 function Get(params : any) :any{
    console.log("[GET] ", params);
 }

 
 function Post(params : any) :any{
    console.log("[POST] deco Factory : ", params);

    return (
        target : any,
        propertyKey : string,
        descriptor : PropertyDescriptor
    ) => {
        console.log("[POST] deco Func" , target, propertyKey, descriptor)
    }
 }

 function Column(params : any) :any{
    //console.log("Column !!!", params) ;
 }

 function UseGuard () : any {
    console.log("UseGuard Factory : ");
    return (
        constructor : Function,
        propertyKey : string,
        descriptor : PropertyDescriptor
    ) => {
        console.log("UseGuard deco Func : ", constructor, propertyKey, descriptor)
    }
 }

// 2. 데코레이터는 무조건 class 와만 같이쓴다. (내부 외부, 멤버 변수, 메소드, 파라미터...)
@Controller
class ExampleController {

    //@Column("email")
    private _email : string;

    constructor(email : string) {
        this._email = email;
    }

    // @Get("/api/v1/user")
    getReq() {}

    // @Post("/api/v1/board")
    postReq() {
        console.log("postReq method process!")
    }

    @UseGuard()
    get email(): string{
        return this._email;
    }

}

// 3. 런타임에 클래스에 붙어서 실행되는 함수 = 데코레이터 -> @ new Class()를 하지 않아도 실행된다.
//console.log(new ExampleController("example@inflearn.com"))

// 4. 유추 -> 뭔가 데코레이터에서 함수 안에 데이터를 조작할 수 있을 거 같다.