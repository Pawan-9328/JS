
// const user = {
//    username: "keshav",
//    price: 99,

//    // this - refer to the current object 
//    welcomeMessage: function () {
//       console.log(`${this.username}, welcome to website`);
//    }
// }
   
// // user.welcomeMessage();
// // //here we change context 
// // user.username = "num"
// // user.welcomeMessage()

// //console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai(); 


// const chai = () =>{
//      let username = "hitesh"
//      console.log(this);
// }

// chai(); 

// const addTwo = (num1 , num2) =>{
//      return num1 + num2
// }

// console.log(addTwo(4,7)); 

//implicit return 
//const addTwo = (num1 , num2) => num1 + num2

//....return objects......but object writs in parennthesis  

const addTwo = (num1 , num2) => ({username: "keshav"}); 

console.log(addTwo(4,7)); 

// using in loop case  
const myArray = [2,3,4,4,67,8];
myArray.forEach(()=> {});
//myArray.forEach(()=> ())