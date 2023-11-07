console.log("Halooo");  //fungsi untuk print apa yang didalam log""

let message; // <-- declaratrion | message adalah variabel
message = "Haloo lagi"; // <-- assign

console.log(message); // <-- memanggil variable message pake log

var warnaMobil = "merah"; // <-- declare & assign
warnaMobil = "hitam"; // <-- reassign
var warnaMobil = "putih"; // <-- redeclare & reassign
console.log(warnaMobil); // var bisa di redeclare | let tidak bisa di redeclare

let hp = "merah";
hp = "putih"; // let bisa di reassign
console.log(hp);

//variabel harus diawali huruf, digits, atau simbol
let bro = "halo bro";
let say = "bilang hai";
//let 123say = error
//let hello% = error

//huruf besar berpengaruh dgn penamaan variabel
let ini = "huruf kecil";
let Ini = "huruf besar";

//ada kata yang tidak bisa dipake untuk variabel contoh let, break, const (reserved name)

//---DATA TYPES---
//STRING
// bisa pake "" <double>, ''<single>, ``<back tick>

//String
let string = "ini string";
string = `ini string`;
string = ' "haloo" '; 
string = " 'halo' ";
//string = ````; //backtick bisa didalem backtick 

//Number
let angka = 123;
let angka2 = 456;
let bigInt = 123n;


//Boolean
let kenyang = true;
let laper = false;

//null
let Null = null; // bisa digunakan untuk variabel yang akan memiliki isi tapi tidak untuk saat ini
// sudah tahu akan menggunakan tipe data apa
//product, qty, location
// mouse, 2, null

// Undefined
let Undefined; // tidak tahu akan menggunakan tipe data apa
console.log(undefined);

//Object
const mobil = {
    warna : "Hitam", //key
    merk : "honda",
}; // menjelaskan ciri-ciri sebuah objek

//array
const merkMobil = ["toyota","honda","bmw"]; // isinya relevan 1 topik

//typeof
console.log(typeof angka, "ini angka");
console.log(typeof kenyang, "ini boolean");
console.log(typeof warna, "ini string");

//mutable vs immutable
const mouse = "mouse hitam"; // immutable
//mouse = "mouse putih"; = error: tidak bisa reassign

const arr = [1, 2, 3, 4]
arr.push(5);
console.log(arr);

let name = "fath"; // stack pertama
let newName = name; // stack ke dua mengambil dari value stack pertama
newName = "ali"; // reassign variabel newName

let person = {
    name: "Jhonny",
    age: 26
,};

let newPerson = person;
newPerson.name = "udin";

//deep copy = mengambil value dari variable mutable dan dijadikan sebagai pointer
//shalow copy = mengambil value dari variable mutable dan TIDAK dijadikan sebagai pointer 
let deepCopy = person;// "person" pointer
// mengubah isi dari variabel person

let shallowCopy = {...person};//spread atau tiga titik


console.log(name, newName);
console.log(person, newPerson);

deepCopy.name = "ujang"; //dot "." digunakan untuk akses key

console.log(deepCopy, person, shallowCopy);

/* object memiliki property dan method 
prop dan method adalah sebuah key
method adalah sebuah fungsi dalam object
property adalah variable dalam object
*/

let string2 = "haiiii zoom";
console.log(string2, string2.length, "digits"); //.length untuk mengukur digits
console.log(string2.slice(0,2)); // index dimulai dari 0
console.log(string2.replace("zoom","pasar")); //replace "zoom" (dicari) ke "pasar" (pengganti)
console.log(string2.toUpperCase());
console.log(string2.charAt(10));
console.log(string2.indexOf("z")); //untuk identifikasi lokasi char di index
//kumpulan operator + - * /
let string3 = string2 + " online!";
console.log(string3);
console.log(string3 + " tambah tambah");
console.log(`ini string tambah ${string3}. `); //literal
console.log("ini string " + string3 + "." );

/*Index
char = 1 digit string
string = kumpuan char
setiap char didalam string memiliki posisi yang disebut sebagai index
index dimulai dari 0
 */


//Number built in method
let number = 100;
console.log(number.toString());

console.log(10 + "10"); //number + string = string
console.log(10 * "abc"); //NaN = Not a Number

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(-1)); // true 
//number selain 0 dianggap true

console.log(Boolean("hello")); // ture
console.log(Boolean("")); // false 
console.log(Boolean(" ")); // true
//string yang lengthnya lebih dari 0 maka true

let date = new Date();
date = new Date("2017-09-21")
console.log(date);


//operator 2
console.log(10 + 10);
console.log(10 - 9);
console.log(10 * 10);
console.log(10 / 2);
console.log(10 ** 3); // 10 pangkat 3
console.log(10 % 3); // 3*3 = 9. 10 - 9 = 1
console.log(1 + 1 + "1");// "21", 1+1 = 2 -> 2 + "1" = "21"
console.log("1" + 1 + 1);// "11", 1+"1" = "11" -> "11" + 1 = "111"


let number2 = 5;
number2 + 2; // 7 tidak diassign ke dalam number2
number2 = number2 + 2; // assign
number *1000; // tida di assign
console.log(number2);
number2 += 30; // sama saja dengan number2 = number2 +30
console.log(number2);
number2++; // increment | number2 + 1 => 38
console.log(number2);
number2--; // decrement | number2 - 1 => 37 

//postfix & prefix
let pre = 0;
console.log(++pre, "ini adalah prefix");

let post = 0;
console.log(post++, "ini adalah postfix");
console.log(post);

//comparasion operator
console.log(2 == 3); // 2 sama dengan 3 = false
console.log(2 == "2"); // value 2 dengan "2" =true
console.log(2 === "2"); // value 2 dengan "2" adalah sama. tetapi tipe datanya beda, sehingga return galse
// == komparasi antar value
// === komparasi antar value dan tipe data

console.log(2 != 3); // 2 tidak sama dengan 3 = true
console.log(2 != 2); // 2 tidak sama dengna 2 = false
console.log(2 !== "2"); // 2 tidak sama dengan "2" = true. karena tipe datanya beda
console.log(2 > 1); // 2 lebih besar dari 1 = true
console.log(2 < 3); // 2 lebih kecil dari 3 = true
console.log(2 >= 2); // 2 lebih besar atau sama dengan 2 = true
console.log(1 <= 3); // 1 lebih kecil atau sama dengan 3 = true

//Pseudocode = pembuatan variabel seperti bahasa manusia

/*
cari luas persegi panjang

luas = panjang * lebar

pseudocode
step 1. 2 variabel panjang dan lebar
step 2. maka luasnya adalah panjgan * lebar
step 3. tampilkan hasil di dalam terminal
*/

let panjang = 5, 
    lebar = 3;
let luas = panjang * lebar;

console.log(`jadi luas persegi panjang adalah ${panjang} dikali ${lebar} sama dengan ${luas}`);

// TIPS
/*
Pelajari tipe data
Pelajari built in method dan prop di dalam variable tipe data tertentu
Pelajari pseudocode
*/