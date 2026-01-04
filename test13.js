class Person {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let ceo = new Person("Bill","Gates");
console.log(ceo);


let Runoob = class {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
};
console.log(Runoob.name);
// output: "Runoob"
console.log(Runoob.url);
// output: "undefined"