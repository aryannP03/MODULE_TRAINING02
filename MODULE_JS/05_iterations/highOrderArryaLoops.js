const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by appple"
}

for(const key in myObject){                                 //to traverse through object we only get keys.
    console.log(`${key} shotcut is for ${myObject[key]}`)   //through key we can access values by using [].
}

 //in forof loop we get values whereas in forin loop we get keys.

 const coding = ["js", "c++", "java", "ruby", "python"]
 
coding.forEach( function (val){      //call back functn
    console.log(val);
} )

coding.forEach( (item) => {         //using arrow function
    console.log(item);
    
} )

function printMe(item){
    console.log(item);
    
}

