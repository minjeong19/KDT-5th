const boxEl = document.querySelector(".box");
//class를 더하기
boxEl.classList.add("orange");

const thirdBoxE1 = document.getElementById("third");
thirdBoxE1.classList.remove("box");

//contain 있으면 true, 없으면 false
console.log(boxEl.classList.contains("box"));
console.log(thirdBoxE1.classList.contains("box"));
