// f(g(x)) ----> f () { return g () } , g : 데코레이터 함수
// g ----> f(g(x)) , f : 데코레이터 팩토리(목적 : 인자전달, param 전달)
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1. 데코레이터는 함수다
function Controller(constructor) {
    console.log("Controller : ", constructor);
    //데코레이터 함수
    return class extends constructor {
        constructor() {
            super(...arguments);
            this._email = 'js@inflearn.com';
            this._name = "js";
            this._age = 10;
        }
    };
}
function Get(params) {
    console.log("[GET] ", params);
}
function Post(params) {
    console.log("[POST] deco Factory : ", params);
    return (target, propertyKey, descriptor) => {
        console.log("[POST] deco Func", target, propertyKey, descriptor);
    };
}
function Column(params) {
    //console.log("Column !!!", params) ;
}
function UseGuard() {
    console.log("UseGuard Factory : ");
    return (constructor, propertyKey, descriptor) => {
        console.log("UseGuard deco Func : ", constructor, propertyKey, descriptor);
    };
}
// 2. 데코레이터는 무조건 class 와만 같이쓴다. (내부 외부, 멤버 변수, 메소드, 파라미터...)
let ExampleController = class ExampleController {
    constructor(email) {
        this._email = email;
    }
    // @Get("/api/v1/user")
    getReq() { }
    // @Post("/api/v1/board")
    postReq() {
        console.log("postReq method process!");
    }
    get email() {
        return this._email;
    }
};
__decorate([
    UseGuard()
], ExampleController.prototype, "email", null);
ExampleController = __decorate([
    Controller
], ExampleController);
// 3. 런타임에 클래스에 붙어서 실행되는 함수 = 데코레이터 -> @ new Class()를 하지 않아도 실행된다.
//console.log(new ExampleController("example@inflearn.com"))
// 4. 유추 -> 뭔가 데코레이터에서 함수 안에 데이터를 조작할 수 있을 거 같다.
