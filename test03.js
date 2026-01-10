// var a = 1, b = 2;
// function myFunction(){
//     window
//     return a*b;
// }
// console.log(myFunction());

// var x = "john";
// var y = new String("john");
// console.log(x,y,typeof x, typeof y, x===y);
// console.log(x.length,y.length)

// var a = `Hello Javascript
// !`

// console.log(a)

// var age = 17;
// if (age < 18) x = "Teenage";
// voteable = (age<18)? "yes": "no";
// console.log(voteable);


// var a = "apple";

// function myFunction(){
//     var b = "banana";
//     console.log("myFunction inside can read ", a , b);
// };

// //console.log("myFunction outside can read ", a , b);
// myFunction();

/*
var num = 5;
var str = "John"
var bool = false;
var array = [1,2,3,4];
var array1 = new Array();
var arary2 = [];

var obj = {name: 'Bill', age: 34};
obj.contry = "USA";

var obj1 = new Object();
obj1.name = "John";
obj1.age = 50;
obj1.contry = "UK"

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof array);
console.log(typeof obj);

console.log(Array.isArray(array));

console.log(array[4]);
console.log(obj["name"] + " " + obj.age);
console.log(obj);
console.log(obj1);
*/

// var person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     hello: function() {
//         console ("Hello ",this.firstname);
//     }
// };

// console.log(person);

// person.bye = function(){
//     console ("Bye ",this.firstname);
// }

// // person.id = 1;
// console.log(person);

// // console.log(person.contry);


// function myFunction(){
//     var a = 1;
//     b = 1
// }

// myFunction();
// console.log(b,a)

// var x = "John";
// var y = new String("John");
// console.log(x,y,y.String, x === y);

// day = new Date().getDay();
// console.log(day);

// switch (day){
//     case 6: console.log("today is Saturday"); break;
//     case 7: console.log("today is Sunday"); break;
//     default: console.log("today is Weekday"); break;
// }

// // var cars = ['Toyota','Nissan','Honda'];
// // var cars1 = new cars;
// console.log(cars1);

// console.log(false.construtor);

txt = `
    ${"john".constructor} 
    ${(3.14).constructor}
    ${false.constructor}
    ${[1,2,3,4].constructor}
    ${{name:'john', age:34}.constructor}
    ${new Date().constructor}
    ${function () {}.constructor}`

console.log(txt);
console.log((100 + 23).toString());