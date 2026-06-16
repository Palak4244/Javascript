//array

const myArr = [0,1,2,3,4,5,6]

//js ke array resizable hote hai,, aur usme int ,string value kuch bhi store kr skte hai
// array js mein shallow copy banate hai 
//shallow copy mtlb jiske object same reference point share krte hai
 
//console.log(myArr[0]);

const myHeros = ["shaktiman" , "captain"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[1]);


//Array methods

myArr.push(7)
//console.log(myArr)
myArr.pop(6)
//console.log(myArr)

myArr.unshift(9)
//console.log(myArr);
myArr.shift()
//console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

//slice , splice

console.log("A" , myArr);

const myn1 = myArr.slice(1,4);
// console.log(myn1);
// console.log("b" , myArr)


const myn2 = myArr.splice(1,4);
console.log(myn1);
console.log(myn2);


//slice mein end value exclusive hoti hai but splice mein inclusive hoti hai

