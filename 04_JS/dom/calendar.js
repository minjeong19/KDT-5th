// JS 구현
const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const input = document.querySelectorAll("#content");
// 클릭 된 요소를 저장하기 위한 전역 변수

// 내가 클릭한 td의 위치
let targetEl;

// calendar   }

function calendarTask(e) {
  console.log(e);
  console.log(e.target);
  if (e.target.tagName === "P") {
    targetEl = e.target;
    date.value = `2023년 2월 ${e.target.textContent}일`;
    targetEl = e.target.parentNode;
  } else if (e.target.tagName === "TD") {
    const day = e.target.children[0].textContent;
    date.value = `2023년 2월 ${day}일`;
    targetEl = e.target;
  } else if (e.target.tagName === "DIV") {
    e.target.remove();
  }
}

function writeSchedule() {
  if (input.value === "" && date.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요!");
    date.setAttribute("placeholder", "날짜를 선택하세요!");
    return;
  } else if (date.value === "") {
    date.setAttribute("placeholder", "날짜를 선택하세요!");
    return;
  } else if (input.value === "") {
    input.setAttribute("placeholder", "내용을 선택하세요!");
    return;
  }
  const addDiv = document.createElement("div");
  addDiv.textContent = content.value;

  addDiv.addEventListener("click", function () {
    addDiv.remove();
  });

  targetEl.append(addDiv);
  content.value = "";
}

calendar.addEventListener("click", calendarTask);
