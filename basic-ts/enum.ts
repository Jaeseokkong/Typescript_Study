enum categoryEnum {
	H = "H",
    K = "K",
    S = "S"
}

const category : categoryEnum = categoryEnum.H;

function cate(category:any){
  if(category === "H"){
  	console.log("5% 할인")
  }else if(category === "k"){
    console.log("10% 할인");
  }else if(category === "S"){
    console.log("20% 할인");
  }else {
    console.log("서버 멈춤")
  }
}
cate(category)