const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];

const fruitsObjArr = fruits.map(function (item, index, orgin) {
  return {
    id: index,
    name: item,
  };
  //   console.log("item", item);
  //   console.log("index", index);
  //   console.log("orgin", orgin);
});

const nums = [3, 6, 9, 12, 15, 18, 21];
const devideArr = nums.map(function (item, index) {
  return item / 3;
});
//화살표함수 버전
// const devideArr = nums.map((item, index) => item / 3);
// console.log(devideArr);

const nums2 = [1, 2, 3, 4, 5, 6];
// const multiArr = nums2.map(function (item, index, orgin) {
//   return item * 4;
// });
const multiArr = nums2.map((item, index, orgin) => item * 4);
console.log(multiArr);

const numbers2 = [1, 2, 3, 4, 5, 6];
const filterArr = numbers2.filter(function (item, index, orgint) {
  return item > 3;
});
//화살표 함수로 표현
// const filterArr = numbers2.filter((item) => item > 3);
console.log(filterArr);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const resultArr = words.filter(function (item) {
  return item.length > 6;
});
// const resultArr = words.filter((item) => item.length > 6);
console.log(resultArr);

const numbers4 = [1, 2, 3, 4, 5, 6];
console.log(numbers4.includes(3));
console.log(numbers4.includes(7));

const numbers5 = [1, 2, 3, 4, 5];
const sumResult = numbers5.reduce(function (acc, item, index, og) {
  return (acc += item);
}, 0);
console.log(sumResult);

const numbers6 = [2, -5, -123, -5480, 24, 0, -69, 349, 3];
const resultReduce = numbers6.reduce(
  (acc, item) => {
    if (item < 0) {
      acc[0] += 1;
    } else acc[1] += 1;
    return acc;
  },
  [0, 0]
);
console.log(resultReduce);
