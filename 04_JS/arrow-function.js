function sayHello() {
  console.log("hello");
}
let sayHello = function () {
  console.log("hello");
};
let sayHello = () => {
  console.log("hello");
};
//--------------
function sum(num1, num2) {
  return num1 + num2;
}
let sum = function (num1, num2) {
  return num1 + num2;
};
let sum = (num1, num2) => {
  return num1 + num2;
};
