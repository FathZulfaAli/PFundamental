/**
 * Object Oriented Program
 * Class, Encapsulation, Inheritance
 *
 * @format
 */

const bmw = {
  brand: "bmw",
  model: "m135i",
  price: 800000000,
};

const toyota = {
  brand: "toyota",
  model: "innova",
  price: 500000000,
};

//template = class
//class adalah template dari object

class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

const honda = new Car("honda", "jazz", 300000000);
const ferari = new Car("ferari", "pot", 30000000000);

console.log(bmw, toyota);
console.log(honda, ferari);

let user = {
  name: "Fath",
  greet() {
    console.log("Hello");
  },
};

console.log(user);
console.log(user.name);
user.greet();

const person = {
  name: "Frengky",
  age: 26,
  address: {
    street: "jl batu kecil",
    postalCode: 14123,
  },
};

//add new key
person.hobby = "Gaming";

//reassign key
person.age = 19;

delete person.hobby; //menghapus key di dalam object
console.log(person);

//cara akses key yang berbeda
console.log(person["name"]);

//optional chaining ?.
console.log(person?.address?.province);

console.log(Object.keys(person)); // return sebuah array, dimana isinya adalah nama dari key
console.log(Object.entries(person)); //return nested array, dimana sebelah kiri adalah key dan kanan adalah value

//looping seluruh key yang ada di dalam object
for (let key in person) {
  console.log(person[key]);
}

//getter and setter
//getter adalah function dalam object yang return sebuah tipe data
//getter diaccess seperti sebuah properti tidak seperti method
const naruto = {
  firstName: "naruto",
  lastName: "uzumaki",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(value = "") {
    const splittedValue = value.split(" "); //string akan diubah menjadi array yang dipisah dengan tanda " "
    this.firstName = splittedValue[0]; //reassign value properti firstName
    this.lastName = splittedValue[1]; //reassign value properti lastName
  },
};

console.log(naruto);
console.log(naruto.fullName);
naruto.fullName = "naruto";
console.log(naruto.fullName);

//destructuring assignment
//unpack values object/array
const computer = {
  vga: "3080",
  processor: "i7 13700k",
  monitor: "LG",
};

console.log(computer.vga);

const { vga, processor } = computer;

console.log(processor);

let a, b;
[a, b] = [10, 20];
console.log(a);

let data1 = [1, 2, 3];
let data2 = [4, 5, 6];
let data3 = data1.concat(data2);
let data4 = [...data1, ...data2];
let data5 = [data1, data2];

console.log(data3);
console.log(data4);
console.log(data5);

const person2 = {
  firstName: "udin",
  lastName: "ujang",
  greet() {
    console.log(
      `Hello nama lengkap saya adalah ${this.firstName} ${this.lastName}`
    );
  },
};

person2.greet();
