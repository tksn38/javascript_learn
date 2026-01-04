// function myfunction(a , b) {
//     return a + b;
// }

// console.log(myfunction(10,20));

// var x = function(a,b) {return a * b};
// console.log(x(10 , 20));

// const x = (x , y) => { x * y } ;
// const y = a => x

// function myfunction(x,y) {
//     y = y || 0;
// }

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    var i, max = arguments[0];
    
    if(arguments.length < 2) return max;
    
    for (i =0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(x);