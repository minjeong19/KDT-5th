let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];

let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

//방법1
// const sameArr = fruits1.filter(function (item) {
//   return fruits2.includes(item);
// });
// const diffArr = fruits1.filter(function (item) {
//   return !fruits2.includes(item);
// });
//화살표함수로 변경
const sameArr = fruits1.filter((item) => fruits2.includes(item));
const diffArr = fruits1.filter((item) => !fruits2.includes(item));

console.log(sameArr);
console.log(diffArr);

//방법2
const sameArr2 = [];
const diffArr2 = [];

fruits1.map((item) => {
  if (fruits2.includes(item)) {
    sameArr.push(item);
  } else {
    diffArr.push(item);
  }
});

//map true false둘다 넘김
//filter는 true만 넘김

const fruits3 = ["Apple", "Banana", "Cherry"];
const findResult = fruits3.find((item) => {
  return item === "Apple";
});
const findIndexResult = fruits3.findIndex((item) => item === "Banana");
console.log(findResult);
console.log(findIndexResult);
