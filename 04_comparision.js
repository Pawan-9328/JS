// console.log("2" > 1);
// console.log( "02" > 1);



// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// ****** Stack  and Heap Memory ******* 

let myYoutubename = "isKeshav"
let  anotherName = myYoutubename

anotherName = "isPawan"

console.log(anotherName);


let userOne = {
      email: "user@gmail.com",
      upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "keshav@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);