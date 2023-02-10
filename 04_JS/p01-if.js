const 민정 = {
  isAdult: true,
  VIP: false,
  drunk: false,
  money: false,
};
if (((민정.isAdult || 민정.VIP) && 민정.drunk) || 민정.money) {
  console.log("통과");
} else {
  console.log("돌아가");
}
