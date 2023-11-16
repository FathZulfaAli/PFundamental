/**
 * Data structure dibuat seperti sistem arsip menyimpan data sehingga mudah untuk
 * dirubah, dinavigate dan diakses
 *
 * , sehingga dapat dipake untuk
 * (manage, search, design algorithms, handle, and simplify and speed up data processing)
 *
 * //stack
 * stack membolehkan 1 jalur saja,
 * LIFO => Last-In-First-Out
 *
 * @format
 */

class Stack {
  #maxSize;
  #container = [];

  constructor(maxSize = 10) {
    this.#maxSize = maxSize;
  }
  push(element) {
    if (this.#isFull()) return console.log("stack overflow");
    this.#container.push(element);
  }
  pop() {
    if (this.#isEmpty()) return console.log("stack underflow");
    this.#container.pop();
  }
  getElement() {
    return this.#container;
  }
  #isFull() {
    return this.#container.length >= this.#maxSize;
  }
  #isEmpty() {
    return this.#container.length === 0;
  }
}

const stack = new Stack(5);
stack.push(10);
stack.push(2);
stack.push(6);
stack.push(90);
stack.push(22);
console.log(stack.getElement());
stack.pop();
stack.push(4);
console.log(stack.getElement());
