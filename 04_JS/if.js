//if문
if (true) {
  console.log("true 입니다.");
} else {
  console.log("false입니다.");
}

// 조건 비교
let age = 10;

if (age > 40) {
  console.log("그는 늙었습니다");
} else if (age <= 40 && age >= 20) {
  console.log("그는 MZ 입니다");
} else {
  console.log("그는 애기 입니다");
}

// if중첩
let isOld = true;
let isRich = false;

if (isOld) {
  if (isRich) {
    console.log("망했어요");
  } else {
    console.log("낫 베드");
  }
} else {
  if (isRich) {
    console.log("대박");
  } else {
    console.log("부럽");
  }
}

//NOT연산자

let otherAge = 16;
let isAult = otherAge > 19;

if (!isAult) {
  console.log("돌아가");
} else {
  console.log("통과");
}

//다중비교
let gender = "M";
let name = "Tom";
let isAdult = true;
if ((gender === "F" && name === "Jane") || isAdult === true) {
  console.log("통과");
} else {
  console.log("돌아가");
}

if (gender === "F" && (name === "Jane" || isAdult === true)) {
  console.log("통과");
} else {
  console.log("돌아가");
}
