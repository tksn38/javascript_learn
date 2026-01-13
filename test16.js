// function myFunction(a, b) {
//     return a * b;
//     //return arguments.length;
// }

// console.log(typeof(myFunction(4,5)));
// console.log(typeof(myFunction(4,5).toString()));

// var func = a => console.log(a);
// func("hello");

// function func(a, b, c, d, e) {
//     console.log( arguments[0]);
// }

// func("apple", "banana", "chocolate", "dog","epse");

// var x = function(x, y = 10) {
//     return x * y;
// }

// function myFunction(a, b) {
//     this.a = a;
//     this.b = b;
// }

// var y = new myFunction(10,200);
// console.log(y.b)

var add = (function () {
    var counter = 0;
    return function() {return counter += 1;}
})();

add();
add();
add();

console.log(add());