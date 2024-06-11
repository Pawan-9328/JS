// const myObject = {
//    js: "javascript",
//    cpp: 'c++',
//    rb: 'ruby',
//    swift: 'swift by apple'
// }

// for (const key in myObject) {
//   // console.log(myObject[key]);
//   console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js" , "rb" , "py", "java" , "cpp"]

// for(const key in programming) {
//    console.log(key);
// }

//basic forEach 
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//      console.log(val);
// })

// arrow 

// coding.forEach ( (item) => {
//    console.log(item);
// })

// coding.forEach ( (item , index, arr) => {
//    console.log(item, index, arr);
// })

const myCoding = [
   {
      languagName: "javascript",
      languagFileName: "js"

   },
   {
      languagName: "C++",
      languagFileName: "cpp"

   },
   {
      languagName: "python",
      languagFileName: "py"

   },

]

myCoding.forEach((item) =>{
     console.log(item.languagFileName);  
})