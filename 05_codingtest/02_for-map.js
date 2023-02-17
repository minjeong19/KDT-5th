const arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}

let sum = 0;
const mapArr = arr.map(function (item) {
  return (sum += item);
});

console.log(arr);

const str = "apple";
for (letter of str) {
  console.log(letter);
}
//인덴스값, 객체에서 많이씀, key값을 확인할 수 있기 떄문
const str2 = "apple";
for (letter in str) {
  console.log(letter);
}

const obj = {
  nba: "lebron",
  soccer: "messi",
  baseball: "TMT",
};
