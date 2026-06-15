const score = 400
//console.log(score)

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length)
//console.log(balance.toFixed(2)); // points ke bad 2 decimal places tk ki value denga bss 


const otherNumber = 123.895
//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-In')); // indian format mein commass lagata hai , whi hm en-In na use kare to default rule follow krenga


// ************ MATHS ******************************


console.log(Math);
console.log(Math.abs(-4)); // negative ko positive mein convert
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(2,3,5,7,8));
console.log(Math.max(4,6,5,7,8));

console.log(Math.random());//0 se 1 ke beech mein hi value hi aati hai

console.log((Math.random()*10 )+1);

console.log(Math.floor(Math.random()*10)+1);

const min = 20 
const max = 30
console.log(Math.floor(Math.random() * (max - min +1)) + min)