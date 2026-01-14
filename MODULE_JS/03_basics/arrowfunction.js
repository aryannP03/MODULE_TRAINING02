//THIS keyword describes about the current context

const user = {
    username : "aryan",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome`);       //here this shows current context
        console.log(this); 
    }


}

user.welcomeMessage()
user.username = "Mo"
user.welcomeMessage()   //gives new username as output bcz of this keyword

console.log(this);      //return empty object bcz in node environment

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

function some(){
    let username = "aryan"
    console.log(this);
    
    console.log(this.username)          //we are not able to use this inside function but only in objects
}

// some()

const some2 = () => {               //function with basic arrow function
    let username = "aryan"
    console.log(this);          //here also this will not work
    
}

//define a function using arrow function in two ways

// const addTwo = (num1, num2) => {             implicit return
//     return num1 + num2
// }

                //OR//
const addTWO = (num1, num2) => (num1 + num2)     //[explicit return] no return required

console.log(`sum of two no's is : ${addTWO(2,2)}`) 
                


