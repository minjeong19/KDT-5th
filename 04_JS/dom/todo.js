const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

const checkBtn = document.createElement("input");
checkBtn.setAttribute("type", "checkbox");
checkBtn.addEventListener("click", function () {
  if (checkBtn.checked === true) {
    checkBtn.parentNode.style.textDecoration = "line-through";
  } else {
    checkBtn.parentNode.style.textDecoration = "none";
  }
});
addLi.append(checkBtn);

inputTask.addEventListener("click", function () {
  if (inputTask === "") {
    inputTask.setAttribute("placeholder", "값을 입력하세요");
  } else if ()
});


