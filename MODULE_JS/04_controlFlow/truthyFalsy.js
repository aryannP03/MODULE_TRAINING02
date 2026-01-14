const userEmail = "a@tgi"

if(userEmail){
    console.log("valid");
    
}
else{
    console.log("invalid");
    
}


//falsy values : false, 0 ,-0, BigInt 0n, "", null, undefines, Nan

//all other values truthy
//ex, - "0", "false", " ", [], {}, function(){}

  //Nullish Coalescing Operator (??): null/undefined
// ?? this operator says ki agar value aayi ho toh vo assign kardo varna null ya undefined kardo into variable to handle future operation on it.
//fall back to handle errors

let val1
val1 = null ?? 10
console.log(val1)

let val2
val2 = undefined ?? 15
console.log(val2)

//Terniary operator (work as true and false)
//condtion ? true : false

const iceTeaPrice = 60
iceTeaPrice >= 80 ? console.log("price greater than 80") : console.log("less than 80");
;

