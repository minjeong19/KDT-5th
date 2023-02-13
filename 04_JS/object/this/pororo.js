function showHeight() {
  console.log(`${this.height}cm 입니다.`);
}

const pororo = {
  name: "pororo",
  height: 100,
  getName() {
    console.log(`${this.name} 입니다.`);
  },
  showHeight,
};
pororo.getName();
pororo.showHeight();
