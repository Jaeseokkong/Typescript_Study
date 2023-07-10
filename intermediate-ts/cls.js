class UserInfo {
    constructor(name, age, city) {
        this.name = name;
        this._age = age;
        this._phone = city;
    }
    get phone() {
        return this._phone.slice(0, 3) + "-" + this._phone.slice(3, 7) + "-" + this._phone.slice(7);
    }
    //속력, 넓이, 나이 (계산이 필요한)
    set phone(newPhone) {
        this._phone = newPhone;
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        if (newAge <= 0)
            this._age = 0;
        else
            this._age = newAge;
    }
}
const user = new UserInfo("재석", 30, "01011112222");
user.age = -25;
console.log(user.name, user.age, user.phone);
