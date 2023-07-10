// 서버에서 다른 서버로 정보
// 프론트에서 서버로 -> json  object
var LoginDataTransferObject = /** @class */ (function () {
    function LoginDataTransferObject(ID, PW) {
        if (PW === void 0) { PW = "default password"; }
        this.ID = ID;
        this._PW = PW;
    }
    return LoginDataTransferObject;
}());
var LoginDTO = new LoginDataTransferObject("Hi");
//LoginDTO.PW = "set"
console.log(LoginDTO);
