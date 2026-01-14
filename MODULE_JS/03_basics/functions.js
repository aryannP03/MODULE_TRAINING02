//functions

function addTwoNum(num1, num2){
    // console.log(num1 + num2);
    let result = num1 + num2
    return result
}

const result = addTwoNum(4,3)

console.log("Result: ", result);

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("aryan"))


//how can we add multiple values into fucntions as arguments one by one (like shopping cart)

function calculateCartPrice(...num1){       // ... it is rest operator to add multiple values
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));

function calculateCartPrice2(val1, val2, ...num1){       // here 200,400 passed into val1 and 2 rest passed on in num1
    console.log(val1)
    console.log(val2)
    return num1
}
console.log(calculateCartPrice2(200,400,500,2000));


//object passing as parameter

const user = {
    username: "Aryan",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)
handleObject({                      //can also be done with this as well
    username: "sam",
    price: 20
})

const myArr = [200, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArr));

//also learned about global and local scope 
