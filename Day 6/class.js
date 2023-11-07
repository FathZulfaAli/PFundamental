/**
 * Class
 * Class adalah template
 *
 * @format
 */

//class declaration
class User {
  name = "";

  //private properties
  #email;
  constructor(name, email) {
    this.name = name;
    this.#email = email;
  }
  greeting() {
    console.log("Hello Wolrd");
  }

  getEmail() {
    return this.#email;
  }
}

//class expression
const User2 = class {
  greeting() {
    console.log("hello");
  }
};

const udin = new User("udin", "udin@fmail.com");
udin.greeting();
console.log(udin.name);

//access modifier
//public and private properties
//private tidak bisa di redeclaer
udin.getEmail("iajoij@naod.com");
console.log(udin.getEmail());

//static properties

class DB {
  static name = "db";
  static #connection = "";
  static #initializeConnection() {
    const number = Math.ceil(Math.random() * 100);
    this.#connection = `new database connection ${number}`;
  } //tidak bisa diakses diluar class

  static getConnection() {
    //function ini bisa diakses dari luar class
    if (!this.#connection) this.#initializeConnection();

    return this.#connection;
  }
}

console.log(DB.getConnection());
console.log(DB.name);
console.log(DB);
/*class merupakan template object
class harus dibuat sebuah object untuk bisa digunakan isinya
static key dalam sebuah class membuat kita bisa mengakses key tanpa harus menciptakan objectk terlebih dahulu */

class Product {
  #stock;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  showStock() {
    if (!this.#stock) return "set stock dulu";
    return this.#stock;
  }
  //Encapsulation
  //mengamankan data
  setStock(value) {
    //validasi bahwa Stock harus number dengan tambah if
    if (typeof value == "number") return (this.#stock = value);
    return console.log("value tidak sesuai");
  }
}

//getter setter ngga bisa untuk private
//const keyboard = new Product("Keyboard Razer", "rahasia" ,5000000); //casenya stock harusnya number malah string
const keyboard = new Product("Keyboard Razer", 500000);
keyboard.setStock(15);
console.log(keyboard);
console.log(keyboard.showStock());

//casenya keryboard dan buku
//buku dan keyboard punya warna, berat, nama, panjang, lebar
// tapi buku juga punya author, dan realasYear sedangkan keyboard tidak
//maka pake inheritence 'extends'
//note tidak bisa menurunkan private class

// child class "extends" parent class
class Book extends Product {
  constructor(name, price, author, releaseYear) {
    super(name, price); //super adalah method yang menjalankan constuctor dari class Product
    this.author = author;
    this.releaseYear = releaseYear;
  }
  showStock() {
    console.log("aowkawokawko");
  } //child bisa override key parent class
}

const komikOnePiece = new Book("komik one piece", 5000, "mario", 1999);
console.log(komikOnePiece);
komikOnePiece.showStock();

//“instanceof” operator ngecek ini punya class siapa
console.log(komikOnePiece instanceof Book);
console.log(komikOnePiece instanceof Product);
