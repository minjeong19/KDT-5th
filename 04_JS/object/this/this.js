const boy = {
  name: "Mike",
  sayHello,
};

function sayHello() {
  console.log(`Hello, I'm ${this.name}`);
}
const girl = {
  name: "Jane",
  sayHello,
};

boy.sayHello();
girl.sayHello();
sayHello();
