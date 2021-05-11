// Implement bind

let obj = {
  name: "Name 1",
  age: 25,
};

const print = function (a, b, c, d) {
  console.log(`Name is ${this.name} and age is ${this.age}`, a, b, c, d);
};

const fnPrint = print.bind(obj, 1, 2);

fnPrint(3, 4);

Function.prototype.bend = function (...args) {
  const _this = this;
  const _obj = args[0];
  const params = args.splice(1);
  return function (...args) {
    _this.apply(_obj, [...params, ...args]);
  };
};
/*
const customPrint = function () {
  console.log(`Name is ${this.name} and age is ${this.age}`);
};

const fnCustomPrint = customPrint.bend(obj);
*/
const fnCustomPrint = print.bend(obj, 6);
fnCustomPrint(7, 8, 9);
