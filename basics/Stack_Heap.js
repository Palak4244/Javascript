// Stack(primitive) , Heap(non - primitive)

let myName = "Palak"
let anotherName = myName
anotherName = "Palak93"
console.log(myName); // palak
console.log(anotherName); // palak93


let userOne = {
    email: "www.google.com",
    upi: "user@ybl",

}

let userTwo = userOne

userTwo.email = "www.amazon.com"
console.log(userOne.email); //www.amazon.com
console.log(userTwo.email); // same


// stack  mein kissi bhi value ki copy milti hai  but heap mein uss value ka reference milta hai