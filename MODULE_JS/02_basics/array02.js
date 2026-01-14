const marvel_heroes = ["thor", "iron", "cap"]
const dc = ["superman", "flash", "batman"]

//marvel_heroes.push(dc)
//console.log(marvel_heroes ); //depicts that array in js can take any type of data, here array in array is pushed.

// const all = marvel_heroes.concat(dc)
// console.log(marvel_heroes);
// console.log(all);


//spread operator

const all = [...marvel_heroes, ...dc]  //does same as concat
console.log(all);


const another_array = [1,2,3, [4,5], [6,7,[8,9]]]

const real_array = another_array.flat(Infinity)   //combines all elements of the array into a single one also infinity is the depth that can be defined it can be int or infinity. 
console.log(real_array); 

console.log(Array.isArray(real_array));
console.log(Array.isArray("Aryan"));
console.log(Array.from("Aryan"))         //creates array from specified
console.log(Array.from({name :"Aryan"}))        //if not understand then it will create a empty array.


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
