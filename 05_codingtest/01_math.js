let nums = [-1.23, 13, 14.52, -33.53, 30];

//1번 주어진 배열에서 가장 큰 수와 작은 수의 찾아서 소수점을 버림 처리
let minNum = Math.min(...nums);
let maxNum = Math.max(...nums);
// console.log(Math.floor(minNum));
// console.log(Math.floor(maxNum));
// console.log(Math.floor(Math.min(...nums)));
// console.log(Math.floor(Math.max(...nums)));

//2번  해당 수 절대값의 평균을 구하기
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += Math.abs(nums[i]);
  //   sum = sum + Math.abs(nums[i]);
}
console.log(sum / nums.length);
//3번 0 ~ 100 까지의 숫자 중에서 랜덤한 정수가 나오도록 만들기
let ranNum = Math.floor(Math.random() * 100);
// console.log(ranNum);

function solution(num) {
  let answer = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) answer = answer + 1;
  }
  return answer;
}
