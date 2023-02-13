const kdt = ["박지원", "김민정", "송민영", "이찬호"];
// kdt[2] = "백진솔";
kdt.push("김민정");
kdt.pop();
kdt.unshift("김민정");
console.log(kdt.push(kdt));
console.log(kdt);
console.log(kdt.pop(kdt));

for (let i = 0; i < kdt.length; i++) {
  console.log(kdt[i]);
}
