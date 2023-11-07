/**
 * ● Create a function to calculate array of student data
 * ● The object has this following properties :
 * ○ Name → String
 * ○ Email → String
 * ○ Age → Date
 * ○ Score → Number
 *
 * @format
 */

class Student {
  constructor(name, email, age, score) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

const students = [
  new Student("aldous", "aldous32@gmail.com", 20, 20),
  new Student("nana", "nana@gmail.com", 19, 90),
  new Student("nolan", "nolanasli@gmail.com", 23, 100),
  new Student("balmond", "almondyes@gmail.com", 23, 10),
];

const hla = (students = [], key = "") => {
  //key dijadikan param agar bisa dipake untuk 2 property
  students.sort((a, b) => b[key] - a[key]); //urutkan besar ke kecil based on key/ param
  const highest = students[0][key];
  const lowest = students[students.length - 1][key];
  const avg =
    students.reduce((sum, current) => sum + current[key], 0) / students.length;

  return { highest, lowest, avg };
};

console.log(hla(students, "score"));
console.log(hla(students, "age"));

//Create a program to create transaction
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.products = [];
    this.total = 0;
  }

  cart(product, qty = 1) {
    this.products.push({ product, qty });
    this.total += product.price * qty;
  }

  checkOut() {
    const data = {
      products: this.products.map((item) => ({
        name: item.product.name,
        qty: item.qty,
      })),
    };
    return data;
  }
}

const products = [
  new Product("Sprite", 5000), //0
  new Product("Jus", 12000), //1
  new Product("Redbull", 22000), //2
  new Product("Root Beer", 9900), //3
  new Product("Aqua", 3500), //4
];

//add to cart
const transaction = new Transaction();
transaction.cart(products[1], 2);
transaction.cart(products[4], 3);
transaction.cart(products[2], 1);

const nota = transaction.checkOut();
console.log("Anda membeli :");

//checkout and show total
nota.products.forEach((item) => {
  const product = products.find((product) => product.name === item.name);
  const subTotal = product.price * item.qty;
  console.log(
    `${item.name} x ${item.qty} = Rp.${subTotal.toLocaleString("id-ID")}`
  );
});

console.log("Total: Rp." + transaction.total.toLocaleString("id-ID"));
