class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  //메소드
  drive() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`);
  }
}
// 상속 선언
class ElecCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color); //상속받아오는 거
    this.fuel = fuel;
  }
  //메소드
  showFuel() {
    console.log(`해당 자동차는 ${this.fuel}의 힘으로 움직입니다!`);
  }
}
const tesla = new ElecCar("tesla", "red", "electricity");
tesla.drive();
tesla.showFuel();
