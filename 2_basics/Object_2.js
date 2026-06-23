//const tinderUser = new Object() //singleton object

const tinderUser = {} // non - singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


//console.log(tinderUser);

//declaring object ke andr object....

const regularUser = {
    email: "abc2gmail.com",
    fullName: {
        userfullName: {
            firstName:"Palak",
            lastName: "Singh",
        }
    }
}
//console.log(regularUser.fullName.userfullName.firstName);


// merging object values(assign use)

const obj1 ={1:"a" , 2:"b"}
const obj2 ={3:"c" , 4:"d"}

//const obj3 = {obj1 , obj2}  //Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//const obj3 = Object.assign(obj1, obj2) //Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//const obj3 = Object.assign({} , obj1 , obj2) //{} acts as target and other as source
//output:{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//SPREAD OPERATOR
const obj3 = {...obj1 , ...obj2} // also used for merging

//console.log(obj3);


// array ke andr objects

const user = [
    {
        email: "p@gmail.com",
        id: 1,
    },
    {
        email: "s@gmail.com",
        id: 2,
    }


]

user[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));

//console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
  
// to check ki property hai ki nhi object mein taki memorycrash na ho run krte time
//console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Output: True


// De-Structuring of object....

const course ={
    coursename: "js in hindi",
    fees:"1000",
    courseInstructor: "Palak",
}

//course.courseInstructor use krne ki jgh hm simply neeche wala format use kr skte hai

const {courseInstructor : instructor} = course // destructuring of object

console.log(instructor);


//API
// {
//     "name": "Palak"
//     "cousename": "js in hindi"
// }


[
    {},
    {},
    {},
]