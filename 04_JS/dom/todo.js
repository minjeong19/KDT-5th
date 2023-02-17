const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

// 2. 삭제하는 방법
// function deleteTask(t) {
//     t.parentNode.remove();
// }

function addList() {
  if (inputTask.value === "") {
    inputTask.setAttribute("placeholder", "내용을 입력하세요");
    return;
  }
  const addLi = document.createElement("li");
  const checkBtn = document.createElement("input");
  checkBtn.setAttribute("type", "checkbox");

  checkBtn.addEventListener("click", function () {
    if (checkBtn.checked === true) {
      checkBtn.parentNode.style.textDecoration = "line-through";
    } else {
      checkBtn.parentNode.style.textDecoration = "none";
    }
  });

  // 1.삭제하는방법
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.addEventListener("click", function (e) {
    e.target.parentNode.remove();
  });

  // 2. 삭제하는 방법
  // deleteBtn.setAttribute("onclick", "deleteTask(this")

  addLi.append(checkBtn);
  addLi.append(inputTask.value);
  addLi.append(deleteBtn);
  todoList.appendChild(addLi);
  inputTask.value = "";
}
addBtn.addEventListener("click", addList);
