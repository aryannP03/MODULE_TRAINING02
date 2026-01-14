//const tigUser = new Object()        //a way to declare a singleton obj

const tigUser = {}              //non singleton obj declr

tigUser.id = "12d3"
tigUser.name = "sam"
tigUser.isLoggedIn = true

const regularUser = {
    email: "some@xcv",
    fullname: {
        userfullname: {
            firstname: "aryan",
            lastname: "patel"               //nesting can be done
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);   //can be accessed using this.

//merging objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2)      //empty paranthesis is optional parameter., which acts as a target object and rest as source
console.log(obj3);                              //spread operator can also be used in objts too.

console.log(Object.keys(tigUser));             //this will display an array of all keys in the obj.
console.log(Object.values(tigUser));             //this will display an array of all values in the obj.
console.log(Object.entries(tigUser));             //this will display an array of all key values pairs in the obj.
console.log(tigUser.hasOwnProperty("isLoggedIn"));             //this will check whether it has the property or not.


 
