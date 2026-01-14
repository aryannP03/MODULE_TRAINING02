//array

const arr = [1,2,3,4,5]
const myBuddy = ["Aryy", "budd", "cst"]

const newarr = new Array(1,2,3,4,5,6)

 



console.log(arr[0]);  // access 0 index element
console.log(myBuddy)
console.log(`newarr : ${newarr}`)

//Array methods :

newarr.push(6)
newarr.push(7)
console.log(newarr);
newarr.pop()
console.log(newarr);

newarr.unshift(10)       //unshift used to push at front
console.log(newarr);


console.log(newarr.includes(9));     //does have or not
console.log(newarr.indexOf(10));       //to find index

const strarr = newarr.join()        //joins and convert all elements of array into a single string.

console.log(newarr);
console.log(strarr);

//slice, splice
console.log("A", newarr);

const slicedArr = newarr.slice(1, 4)

console.log(`Sliced : ${slicedArr}`);
console.log(newarr);

const splicedArr = newarr.splice(1,4)
console.log(`Spliced : ${splicedArr}`);
console.log(newarr);






