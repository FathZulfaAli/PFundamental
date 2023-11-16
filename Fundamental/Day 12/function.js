/** @format */

let result;

function greet(str) {
  result = str;
}

function hello() {
  greet("Hello");
}

function arigatou() {
  greet("arigatou");
}

arigatou();
hello();
greet("hei");
console.log(result);

const calculator = (a, b) => a + b;
const displayer = (something) => console.log(something);

displayer("hello");
displayer(calculator(10, 11));
