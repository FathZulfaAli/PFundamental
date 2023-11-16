/** @format */

//Promise
const tryPromise = new Promise((resolve, reject) => {
  let isError = true;
  if (!isError) resolve("success");
  else reject("error");
});

tryPromise
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Done"));

const fetchData = async () => {
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      console.log(users[0]);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("always running");
    });

  console.log("sequence 2");
};

fetchData();
