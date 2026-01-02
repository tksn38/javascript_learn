// //变量
// const z = 10;
// //z = 20;
// if (true) {
//     const z = 20;
//     console.log(z);
// }
// console.log(z);

// var a = 123e5;
// var cars = new Array();
// cars[0] = "Toyota";
// cars[1] = "Honda";
// cars[2] = "Nissan";
// console.log(a,cars);

// var cars = ["BMW","Audi"]
// console.log(cars);

var person = {
    firstname : "John",
    lastname : "Doe",
    id : 5566,
    fullName : function(){
        return this.firstname + " " + this.lastname 
    }
};

console.log(person.id, person.fullName);


