
//spread fucntion 
function calculateCartPrice(val1, val2, ...num1) {

   return num1;

}
// val1 = 200;
//val2 = 400 
//rest of - num1 = 500,2000
//console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
   username: "hitesh",
   price: 199
}

function handleObject(anyObject) {
   console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject({
   username: "samm",
   price: 399
});

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
   return getArray[2]
}

console.log(returnSecondValue([200, 400, 500, 1000]));