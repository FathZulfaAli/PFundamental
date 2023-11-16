/** @format */

const obj = {
  nama: "udin",
  umur: 100,
};
console.log(obj);
console.log(JSON.stringify(obj));

//JSON.stringify merupakan conversion dari obj ke json string obj
//JSON.parse merubah dari json obj ke obj biasa

const { penduduk_konoha } = require("./data.json");
console.log(penduduk_konoha);
