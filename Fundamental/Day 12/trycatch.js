/** @format */

//try => mencoba => eksekusi sebuah code
//catch => menangkap error apabila code gagal di eksekusi

const tryCatch = () => {
  try {
    const num1 = "asd";
    const num2 = 5;
    if (isNaN(num1) || isNaN(num2)) throw new Error("bukan number");
    console.log(num1 + num2);
  } catch (err) {
    console.log(err);
  }
};

tryCatch();

const fetchData = async () => {
  try {
    const respond = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await respond.json();
    users.map((users) => console.log(users.name));
  } catch (error) {
    console.log(error);
  }
};

fetchData();

//await membuat sebuah async jadi sync
//promise berjalan secara async
//untuk dapet hasil dari promise itu lewat .then
//untuk dapet hasil then maka promise harus ditunggu (await) sampai selesai
//apabila ada kegiatan/task yang melibatkan variabel dari hasil promise (variabel dalam .then)
//maka harus menunggu promise juga untuk bisa dapet hasil dari variable
