// .split: 문자를 인수 기준으로 쪼개서 배열로 반환
// Hello
let helloTest = "H-e-l-l-o";
let helloTestArr = helloTest.split("-"); //기준이 되는 문자는 날아감
console.log(helloTestArr);

// .reverse: 배열의 순서를 뒤집어서 반환
// .join: 배열을 인수 기준으로 문자로 병합해서 반환

let reverseHello = helloTestArr.reverse();
console.log(reverseHello);

// let helloStr = helloTestArr.join(""); //특정문자를 더해서 함쳐줌
// console.log(helloStr);

let helloJoin = reverseHello.join("");
console.log(helloJoin);
console.log(hello.split("").reverse().join(""));

const obj = {
  arr: ["a", "b", "c"],
  number: 10,
};
let testStr = obj.arr.reverse().join("");
console.log(testStr);
