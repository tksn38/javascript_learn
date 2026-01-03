"use strict"
// var x;
// var x = 5;
// console.log(x);
// function myfunction(){
//     return x;
// }

// console.log(myfunction());
// var x; 

// var a = 10 + 5;
// var x = 10 + "5";
// console.log(a,typeof(a));
// console.log(x,typeof(x));

var person = [1,2,3];
console.log(Array.isArray(person));
console.log(person);

person["firstname"] = "John";
console.log(Array.isArray(person));
console.log(person);

person["lastname"] = "Doe";
console.log(Array.isArray(person));
console.log(person);
console.log(person.length);

console.log(person[0])
console.log(person["firstname"])