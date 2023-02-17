//절대값
const num1 = -999;
console.log(Math.abs(num1));

//최대, 최소값 구하기
console.log(Math.min(6, 23, 4, 1, 7, 3, -2));
console.log(Math.max(6, 23, 4, 1, 7, 3, -2));

const numArr = [1, 2, 3, -5, 10, 13, -77, 1000];
console.log(...numArr);
console.log(Math.min(...numArr));
console.log(Math.max(...numArr));

//소수점 관리
const num3 = 3.14;
console.log(Math.round(num3)); //반올림
console.log(Math.floor(num3)); //버림
console.log(Math.ceil(num3)); //올림
