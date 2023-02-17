//문자열
const str = "Hello, world!";
//문자열 길이
console.log(str.length);

//문자열 찾기
//제일 처음만난거 위주
//못찾으면 -1
console.log(str.indexOf("world"));

//문자열 자르기
console.log(str.slice(0, 5));
console.log(str.slice(0, str.indexOf("world")));

//문자열 바꾸기
//원본에는 변화를 주지 않는다.
console.log(str.replace("world", "뽀로로"));
console.log(str);

//문자열 반복하기
const str2 = "우영";
const longStr = str2.repeat(10) + "우";
console.log(longStr);

//문자열 앞 뒤 공백 문자 제거하기
const str3 = "            Hello, world           ";
console.log(str.trim());

function solution(n) {
  let answer = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer += "수";
    } else {
      answer += "박";
    }
  }
  return answer;
}
