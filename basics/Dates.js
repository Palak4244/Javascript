//January 1 , 1970 ke according batata hai

let myDates = new Date()
console.log(myDates);
console.log(myDates.toString());
console.log(myDates.toDateString());
console.log(myDates.toLocaleString());//gives date with time
console.log(typeof myDates);


let myCreatedDate = new Date(2026,5,16) // months 0 se start hote hai
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now() //time stamp deta hai jisko quiz wagairh mein mostly use krte hai hm
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); //ms mein timie ko deta hai


let newDate = new Date();
console.log(newDate)
console.log(newDate.getMonth());
console.log(newDate.getDay());

//read about more about toLocalString.......

newDate.toLocaleString('default',{
    weekday : "long",

    
})