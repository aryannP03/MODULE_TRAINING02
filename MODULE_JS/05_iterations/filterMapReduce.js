//foreach function does not return any values.

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4 )    //filter function
console.log(newNums);

const newNums2 = []

myNums.forEach( (num2 => {
    if(num2 > 4)
        newNums2.push(num2)
}))

console.log(newNums);


//similarly objects can also be accessed with filter which is more efficient


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//MAP--similar to foreach, filter

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const myNumbers2 = myNumbers.map( (num) => num + 10 )
// console.log(myNumbers2);


//chaining --
const myNumbers2 = myNumbers
                    .map( (nums2) => nums2 * 10 )
                    .map( (nums2) => nums2 + 1 )        //gets value from first map
                    .filter( (nums2) => nums2 >= 40 )



console.log(myNumbers2);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//REDUCE
// BASICALLY FIBONACCI IN ARRAY : 
//NOTE : REDUCE FUNCTION ENDS WITH ,INITIAL VALUE THEN THAT VALUE IS PASSED TO ACCUMMULATOR OR ACC THEN ACC IS ADDED WITH CURRVAL AND AGAIN STORED IN ACC LOOP CONTINUES.
//array.reduce((accumulator, currentValue, index, array) => {
//   return newAccumulator;
// }, initialValue);

const myNums3 = [1,2,3] 

const myTotal = myNums3.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0 )

console.log(myTotal);

