//실습
//합산을 위한 변수
let sum = 0;
for (let i = 1; i < 1001; i++) {
  if (i % 2 != 0) continue;
  sum += i;
}
console.log(`총합은 ${sum}입니다`);
