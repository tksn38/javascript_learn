// cars = ["Toyota","Honda","Nissan","Mazda","Suzuki"];
// //var i=2, len=cars.length;
// //for (i=0;i<cars.length;i++) {
// for (x in cars) {
// console.log(cars[x]);
// }

var person ={
    fname: "Bill",
    lname: "Gate",
    Age:   56
}

var txt = ""
for (x in person){
    txt = txt + person[x];
}
console.log(txt);  