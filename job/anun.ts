const user : any = {
    ID : "js",
}

console.log(user.name);
console.log(user.length);

const newUser :unknown = {
    ID : "JS"
};

console.log(newUser.ID);
console.log(newUser.name);
console.log(newUser.length);