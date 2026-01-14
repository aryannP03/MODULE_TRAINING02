//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Aryan",
    "full name": "aryan patel",     
    [mySym]: "mykey",               //this is a symbol
    age: 22,
    email: "aryan@abc",
    isLoggedIn: true,
    lastLogin: ["Monday", "Tuesday" ]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"] );    //can only be accessed like this.
console.log(jsUser[mySym]);


//adding function into jsUser

jsUser.greeting = function(){
    console.log("Hello JS user !");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user ! ${this.name}` );
}
console.log(jsUser);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

