const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const resultObj = Object.assign(obj1, obj2);

console.log("obj1", obj1);
console.log("obj2", obj2);
console.log(resultObj);

console.log(obj1 === resultObj);

resultObj.a = 10;
console.log(obj1);

const tetzObj = {
  name: "이효석",
  age: "39",
  brain: null,
};
//옛날 방식
// const name = tetzObj.name;
//구조분해할당
const { name: tetzName, age, brain, girlFriend = "없음" } = tetzObj;
console.log(tetzName, age, brain, girlFriend);
