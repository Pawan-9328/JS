
const user = {
   username: "keshav",
   price: 99,

   // this - refer to the current object 
   welcomeMessage: function () {
      console.log(`${this.username}, welcome to website`);
   }
}
   
// user.welcomeMessage();
// //here we change context 
// user.username = "num"
// user.welcomeMessage()

//console.log(this);

function chai(){
    let username = "hitesh"
    console.log(this.username);
}

chai(); 