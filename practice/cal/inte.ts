interface ICar {
    name : string;
    speed : number;
}
const car = { speed : 0, name : ''};

const carProxy : ICar = new Proxy<ICar>(car, {
    get(target : ICar, p : keyof ICar){
        console.log("get", target, p);
    },

    set(target : ICar, p : keyof ICar , newValue : typeof target[typeof p]){
        console.log("set", target , p , newValue);
        return true;
    }
});

carProxy.speed = 30;
console.log(carProxy.speed)