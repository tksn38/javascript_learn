// var person = {
//     firstname : "Bill",
//     lastname : "Gates",
//     id : 0001 ,
//     fullName : function() {
//         return this.id + " " + this.firstname + this.lastname;
//     }
// }

// console.log(person.fullName())


var person1 = {
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

var person2 = {
  firstName  : "John",
  lastName   : "Doe",
};

console.log(person1.fullName.call(person2))
//John Doe

