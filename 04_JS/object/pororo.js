const pororo = {
  name: "뽀로로",
  age: 7,
  running: function () {
    console.log("뽀로로가 뜁니다.");
  },
  say() {
    console.log("뽀로로는 귀엽습니다");
  },
};

pororo.running();
// console.log(pororo.name);
// console.log(pororo["age"]);

pororo.gender = "M";
pororo["height"] = "100cm";
delete pororo.gender;
// console.log(pororo);

// console.log("name" in pororo);

for (let key in pororo) {
  console.log(key);
  console.log(pororo.key, pororo.key);
  console.log(pororo["key"], pororo["key"]);
}

for (let key in pororo) {
  console.log(`key는 ${key}, key안의 값은 ${pororo[key]}`);
}
