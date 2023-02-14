const orangeEl = document.querySelector(".orange");
const skyEl = document.getElementById("skyblue");
const ulEl2 = document.querySelector("ul>li:nth-child(2)");
console.log(skyEl);

ulEl2.classList.add("orange");
console.log(ulEl2);

if (orangeEl.classList.contains("orange") === true) {
  orangeEl.classList.remove("orange");
}

console.log(orangeEl);
