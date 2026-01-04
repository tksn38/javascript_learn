function myFunction(a,b) {
    return a * b;
}
console.log(myFunction(10,20));
//console.log(myFunction);

var myNewFunction;
myNewFunction = myFunction.call(myNewFunction,100,200);
console.log(myNewFunction);

var myNewFunction2;
myNewFunction2 = myFunction.apply(myNewFunction2,[1000,2000]);
console.log(myNewFunction2);
