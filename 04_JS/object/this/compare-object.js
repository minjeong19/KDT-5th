const tetz = {
  name: "이효석",
  email: "xenosign@naver.com",
};
const 이효석 = {
  name: "이효석",
  email: "xenosign@naver.com",
};

console.log(tetz === 이효석);

const tetzCopy = tetz;
tetzCopy.name = "tetz";
console.log(tetzCopy);
console.log(tetz);
console.log(tetz === tetzCopy); // TRU
