//생성자 함수 버전
// function Car(brand, color) {
//   this.brand = brand;
//   this.color = color;
//   this.drive = () => {
//     console.log(`${this.brand}의 ${this.colof}색 자동차 주행 중입니다.`);
//   };
// }
// const hyundai = new Car("hyundai", "blue");
// const porsche = new Car("porsche", "black");
// const toyota = new Car("toyota", "silver");

// console.log(hyundai.brand);
// porsche.drive();
// toyota.drive();

// Class 선언
class ClassCar {
  // 생성자 전달
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  // 메소드 선언
  drive() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`);
  }
}
const hyundai = new ClassCar("hyundai", "blue");
const porsche = new ClassCar("porsche", "black");
const toyota = new ClassCar("toyota", "silver");

console.log(hyundai.brand);
porsche.drive();
toyota.drive();
