/**
 * function adalah subprogam yang bisa dipanggil untuk code lain
 *
 * @format
 */

//declaration function
function square(number) {
  //task dari function square
  return number * number;
}

// square merupakan nama function
// number merupakan paramtere
// param adalah variable yang ada di dalam sebua function
// param dapat dipake buat passing value
// return adalah hasil dari  function dan NGGA semua function butuh return

function print(value) {
  console.log(value);
}

console.log(square(5));

function penjumlahan(number1, number2) {
  print(number1 + number2);
}

let angka1 = 1;
angka2 = 5;

penjumlahan(angka1, angka2);

const perkalian = function (angka1, angka2) {
  print(angka1 * angka2);
};

const penjumlahan3 = (angka1, angka2) => angka1 + angka2; //auto return
const penjumlahan3_2 = (angka1, angka2) => {
  angka1 + angka2;
};

console.log("arrow function", penjumlahan3(1, 2));
console.log("curly bracket", penjumlahan3_2(1, 2));

const greetings = () => {
  const hello = "hello";
  return hello;
};
//console.log(hello); akan error karena hello adalah variabel dalam function, maka hanya bisa dipake didalem function
console.log(greetings());

//default parameter: adalah value asli jika tidak di define

const say = (name, greet = "hello, ") => {
  console.log(greet + name);
};
say("john", "selamat malam, "); //merubah default param dengna argument ke 2
say("john"); //akan muncul default param yang sudah di set

const restFunction = (param1, param2, ...restparam) => {
  console.log(param1, "param1");
  console.log(param2, "param");
  console.log(restparam, "restParam");
};

restFunction(1, 2, 3, 4, 5, 6, 7);

const testFunction = (param1, param2, param3) => {
  console.log(param1, "param1");
  console.log(param2, "param2");
  console.log(param3, "param3");
};

testFunction(1, 2, 3, 4, 5, 6, 7);

const restFunction2 = (...restParam) => {
  console.log(restParam, "restParam");
};

restFunction2(1, 2, 3, 4, 5, 6, 7);

//jumlahkan semua nomor yang ada di param

const restPenjumlahan = (...numbers) => {
  let result = 0;
  numbers.map((value) => (result += value));
  return result;
};

console.log(restPenjumlahan(1, 2, 31, 23, 14, 12, 412, 451, 5));

//nested function
const getMsg = (name) => {
  const say = () => "hello, " + name;
  const welcomeMsg = () => " welcome to indo";
  return say() + welcomeMsg();
};
console.log(getMsg("Fath"));

//closure function
const greetingsClosure = (name) => {
  const hello = "hello ";

  return () => hello + name; //arrow function bersifat single statemnt dan tidak perlu return
};

const greetName = greetingsClosure("fath");
console.log(greetName());

const names = ["udin", "nobita", "spongebob"];

const map = names.map((values) => values);
//map adalah sebuah method yang akan ma return sebuah array
// dimana hasilnya yang direturn merupakan hasil return dari functionnya
// panjang arraynya sama dengan banyaknya loopingnya

const foreach = names.forEach((values) => values);
//foreach tidak akan return

console.log(map, "ini map");
console.log(foreach, "ini foreach");

//Currying Function
const multiplier = (factor, number) => number * factor;
console.log(multiplier(5, 3));

const multiplier2 = (factor) => (number) => factor * number;
console.log(multiplier2(2)(3));

//Recursive: memanggil function itu sendiri
const countDown = (fromNumber) => {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) return countDown(nextNumber);
};

countDown(3);
