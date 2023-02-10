// 나머지 연산자
let num = Math.floor(Math.random() * 10);
console.log(num);
console.log(num % 2);

// 거듭 제곱
console.log(2 ** 4);
console.log(Math.sqrt(4));

// 연산자 줄여 쓰기
let num2 = 5;
num2 = num2 * 5;

let num3 = 5;
num3 *= 5;

console.log("연산자 줄여쓰기", num2, num3);

// 증가 감소 연산자
let num4 = 10;

console.log("증가 감소 연산자", num4++);
console.log(num4);

let a = 1;
let b = "1";

//비교 연산자
console.log(a == b);

//일치 연산자,모든게 일치할 때, 무조건 이거 쓰기
console.log(a === b);
