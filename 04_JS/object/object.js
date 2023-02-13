const 나 = {
  name: "김민정",
  age: 25,
};

// 접근
console.log(나.name);
console.log(나["age"]);

// 추가
나.gender = "F";
console.log(나);

나["color"] = "green";
console.log(나);

// 삭제
delete 나.color;
console.log(나);
delete 나["age"];
console.log(나);
