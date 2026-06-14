const AccountId = "12345";
let EmailId  = "palak@gmail.com";
var Name = "Palak";
roll_no = "778";
let id ;
// age = "12"; but yeh use nhi krna chahiye lekin yeh space occupy kr leta hai 

// var hmme nhi use krna chahiye because of issue in block scope and functional scope
console.log(AccountId);
console.table([AccountId , EmailId , Name , roll_no , id]);

// hm AccountId  = 2 ; nhi likh skte kyoki woh ek constant hai

EmailId = "palak433@gmail.com";
Name = "Singh";
roll_no = "345";
id = "5";
age = "15"
console.table([AccountId , EmailId , Name , roll_no , id , age]);