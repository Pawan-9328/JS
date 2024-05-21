
//....array......

const myArr = [0,1,2,3,4,5]
const mtHeors = ["shaktiman", "naagraj"];
// console.log(myArr[4]); 

//.....Array methods...... 

// myArr.pop(7); 
// myArr.push(6);
// console.log(myArr);

// myArr.unshift(0);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr);


// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// //..... slice , splice .... 

// console.log("A ", myArr);

// const myn1 = myArr.slice(1,3);
// console.log(myn1 );
// console.log("B ", myArr);

// const myn2 = myArr.splice(1,3);
// console.log(myn2 );

//.....Array Part two.......

const marvel_heros = ["thor", "Ironman" , "spiderman"];
const dc_heros = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros);
// console.log((marvel_heros));

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

//......spread.....
//  const allHeros = [...marvel_heros, ...dc_heros]
//  //console.log(allHeros);

//  const another_array = [1,2,3, [4,5,6],7,[4,5]];

//  const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Keshav"));
// console.log(Array.from("keshav"));
// console.log(Array.from( {name: "Keshav"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
