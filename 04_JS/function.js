// function helloFunc() {
//   console.log(`Hello`);
// }

// function returnFunc() {
//   console.log(`Return`);
//   return "return";
// }

// let str = returnFunc();
// console.log(str);

// let str = helloFunc();
// console.log(str); //return 값이 없어서 undefined

// let noNameFunc = function () {
//   console.log("No Name");
// };
// noNameFunc();

function sayHello(name = "friend") {
  console.log(`Hello~ ${name}`);
}

sayHello("마이크");
sayHello();

// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(sum(10, 20));

// function square(num) {
//   return num ** 2;
// }
// console.log(square(13));
