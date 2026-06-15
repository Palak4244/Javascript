const name = "Palak"
const repocount = 7

console.log(name + repocount) // don't use this

console.log(`Hello my name is ${name} and my repocount is ${repocount}`); // use this instead
 

const gameName = new String('Palak')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-1, 3)
console.log(anotherString);

const newStringOne = "  Palak  "
console.log(newStringOne.trim()) // use to remove extra spaces

const url = "https://palak.com/palak%20singh"
console.log(url.replace('%20' , '_'));
console.log(url.includes('cdsa'))
console.log(gameName.split('a')); // split kr deta hai value ko ,output: ['p','l','k']

