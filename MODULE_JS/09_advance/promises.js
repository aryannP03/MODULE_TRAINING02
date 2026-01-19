const promise1 = new Promise(function (resolve, reject){
    //do an async taks like DBcalls,
    setTimeout(function(){
        console.log('aysnc task completed');
        resolve()                       //this methods connects .then
    }, 1000)
})

promise1.then(function(){               //automatically gets return value from promise.
    console.log('Promise consumed !')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("async 2 resolved");    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "aryan", email: "ap@abc" })
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "aryan", email: "ap@abc" })
        }
        else{
            reject('ERROR : Something went wrong')
        }
    }, 1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally( () => console.log("promise is either rejected or resolved ") )

// console.log(userName);


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "js", email: "js@abc" })
        }
        else{
            reject('ERROR : JS went wrong')
        }
    }, 1000)
})

//---------------------------------ASYNC & AWAIT----------------------------------------------------------------//

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch (error){
        console.log(error);
        
    }
    
}
consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://ipstack.com/?utm_source=Github&utm_medium=Referral&utm_campaign=Public-apis-repo-Best-sellers')
//         // console.log(response);
        
//         const data = response.json()
//         console.log(data);
//     } catch(error){
//         console.log("Error: ", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})