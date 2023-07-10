interface IUser {
    name : string;
    age : number;
}

interface IBook {
    title : string;
    price : number;
}

interface ICart {
    userName : string;
    bookName : string;
}

interface IUserCartService {
    user : IUser;

    book : IBook;

    cart : ICart;
}

function login(params : IUserCartService["user"]){
    console.log(params);
}

login({
    name : 'js',
    age : 10
})

function searchBook(params : IUserCartService["book"]){
    console.log(params);
    
}

searchBook({
    title : "js language", 
    price : 1000
});