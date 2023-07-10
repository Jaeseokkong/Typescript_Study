// 서버에서 다른 서버로 정보
// 프론트에서 서버로 -> json  object

class LoginDataTransferObject {

    public readonly ID;
    private readonly _PW;

    constructor(ID :string, PW : string = "default password"){
        this.ID = ID;
        this._PW = PW;
    }

    // set PW(newPW : string){
    //     this._PW - newPW;
    // }


    // constructor(public ID :string, public PW? : string){
    // }
}


const LoginDTO = new LoginDataTransferObject("Hi");
//LoginDTO.PW = "set"
console.log(LoginDTO);