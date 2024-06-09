function sayMyName() {
   console.log("Hii Function");


}

//sayMyName();

// function addTowNumbers(number1 , number2) {
//       //console.log(number1 + number2);
//       // let result = number1+number2
//       // console.log("keshav");
//       return number1+number2; 
// }

// const result = addTowNumbers(3,5);


// console.log("Result: ", result);

//...wrap the fucntion...

function loginUserMessage(username) {
   if (!username) {
      console.log("Pls enter a username");
      return 
   }
   return `${username} just logged in`
}
// if you not passed the value that time print undefined 
console.log(loginUserMessage("Keshav")); 
