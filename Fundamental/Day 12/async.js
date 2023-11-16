/** @format */

//async adalah rangkaian code yang dikerjakan secara bersamaan
//sync adalah rangkaian code yang dikerjakan secara antri atau 1 per satu

const message = () => {
  console.log("async is EZ");
};

setTimeout(message, 3000); // function yang punya 2 argumen
// argumen 1 akan dijalankan setelah argumen 2 selesai (waktu salam ms habis)
const message2 = () => {
  console.log("ini setelah sebelum 3000");
};
setTimeout(message2, 1000);
