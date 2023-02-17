const arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}
console.log(arr);
const arrReduce = arr.reduce((acc, item, index) => {
  return (acc += item);
}, 0);
console.log(arrReduce);
