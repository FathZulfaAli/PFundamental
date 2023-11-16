
// if conditional statement
let age = 99;

if (age >= 17) {
//task
    console.log("anda bisa membuat ktp");
    console.log("siapkan data datanya"); 
} else {
    console.log("anda belum cukup umur");
}

 // code block membungkus statement yang akan dijalankan

// else if conditional statement
let grade = "B"

if (grade === "A") console.log("GG");
 else if (grade === "B") console.log("Well Played");
 else if (grade === "C") console.log("Nice Try");
 else console.log("Invalid");
// tanpa {} karena hanya 1 statement, jadi lebih simpel

///Logic Operator
let kota = "Pasuruan";
let provinsi = "Jatim" ;
let kodepos = 98123 ;

if (provinsi === "Jatim" && kota === "Pasuruan") { // && 2 kondisinya harus true
    console.log("Anda di Pasuruan");
} else if (
    provinsi === "Jatim" && 
    kota === "Pandaan") {

    console.log("Anda di Pandaan");
} else if ( 
    provinsi === "Jateng" || 
    kodepos === 98123 ) {

    console.log("Welcome to Jatim");}
else console.log("Anda bukan di Pasuruan");

//nested if
let gender = "man";
let name = "naruto";
age = 17;
if (gender === "man") {
    if (age <= 10) {
        if (name === "naruto") console.log("anak konoha");
    } else if (age > 10 && age <= 17 ) console.log("cowok remaja");
    else console.log("pria dewasa");
} else if (gender === "woman") {
    if (age <= 10) console.log("anak cewek");
    else if (age > 10 && age <= 17 ) console.log("cewek remaja");
    else console.log("wanita dewasa");
}

let kendaraan = "mobil";
let merek = "bmw";

if (kendaraan === "mobil") console.log("ini adalah mobil");
else if (merek === "bmw") console.log("ini adalah mobil merek bmw");
else console.log("ini adalah motor");

if (kendaraan === "mobil") console.log("ini adalah mobil");
if (merek === "bmw") console.log("ini adalah mobil merek bmw");
else console.log("ini adalah motor");

if (!(kendaraan === "mobil")) console.log("ini adalah motor");
// ! = tidak
// !(true) = false 
// !(false) = true



///Switch Case
// hanya dapat membandingkan 1 variabel 
// dan hanya bisa membandingkan secara equals
const fruit = "papaya";

switch (fruit) {
    case "papaya" : // case dengan value papaya, sama kaya if
        console.log("ini buah pepaya");
        break; // untuk tanda akhir dari case 
    case "mangoes" : // else if
        console.log("ini buah mangga");
        break;
    case "orange" : // else if
        console.log("ini buah orange");
        break;
    default: // else
    console.log("ini bukan buah");
}

let number = 1;
switch (number) {
    case "1":
        console.log("ini pake operator ==");
        break;
    default:
        console.log("ini pake operator ===");
}
// jadi switch menggunakan operator === membandingkan value dan type data


///Truthy and Falsy
/*truthy

*/

/*falsy

 */

if (1) console.log("ini adalah true");
if (0) console.log("ini adalah false");
if ("hello")  console.log("ini adalah true");
if (!" ") console.log("tidak muncul / false");

let angka = 1; // 1 adalah true
if (angka) console.log("ini true dari variabel angka");

let nama = "";
if (!nama) console.log("harus diisi");

// ternary operator adalah sebuah if else dalam bentuk single statement
gender = "female";
if (gender === "male") console.log("namanya joko");
else console.log("namanya nuna");

gender == "male" ? console.log("namanya joko") : console.log("namanya nuna");
// format ternary operator 
// variabel/value ? true : false

let kenegaraan = "indonesia";

kenegaraan == "indonesia"
 ? console.log("halo indonesia")
 : kenegaraan == "jepang"
 ? console.log("halo jepang")
 : console.log("halo korea");