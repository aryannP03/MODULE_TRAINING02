// Create a basic product management system -  

// create an array of object with this product details
// {
//   id: 1,
//   name: "product name",
//   price: 0,
//   stock: 0,
//   isAvailable: true/false
// }

// Implement this functionalities - 
// addProduct(id, name, price, stock) - isAvailable should be true if stock > 0
// getAvailableProducts() - return products where isAvailable === true
// findProductByName(name) - return product details, else "Product not found"
// printProductList() - Output: Mouse - ₹499 - In Stock

const products = [
    {
        id: 1,
        name: "Keyboard",
        price: 299,
        stock: 5,
        isAvailable: true 
    },
    {
        id: 2,
        name: "Screen",
        price: 399,
        stock: 7,
        isAvailable: true 
    },
    {
        id: 3,
        name: "Mouse",
        price: 499,
        stock: 0,
        isAvailable: false 
    },
    {
        id: 4,
        name: "Stylus",
        price: 599,
        stock: 3,
        isAvailable: true 
    },
    {
        id: 5,
        name: "laptop",
        price: 699,
        stock: 0,
        isAvailable: false 
    },
]

// function addProduct(id1, name1, price1, stock1){
//     products.push({
//         id: id1,
//         name: name1,
//         price: price1,
//         stock: stock1,
//         isAvailable : (stock1 !=0 ? true : false) 
//         })
// }

// console.log(products)
// addProduct(6, "Phone", 799, 0)
// console.log(products)

// const getAvailableProducts = () => {
//     for(const product of products)
//         if(product.isAvailable){
//             console.log(product)
//         }
// }
// getAvailableProducts()

// function findProductByName(name){
//     for(const product of products){
//         if(product.name == name){
//                 console.log("Product Found !")
//                 return
//         }        
//     }    
//         console.log("Product not Found !")    

// }
// findProductByName("")

function printProductList(){
    let temp = null
    for(const product of products){

        if(product.isAvailable)
            temp = "inStock"
        else
            temp = "notInStock"
        console.log(`${product.name} - ${product.price} - ${temp} `)    
    }

}
printProductList()



