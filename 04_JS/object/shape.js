class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    console.log(`rectangle의 넓이는 ${this.width * this.height}`);
  }
}
class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    console.log(`Triangle의 넓이는 ${(this.width * this.height) / 2}`);
  }
}
class Circle extends Shape {
  constructor(radius) {
    super(); //부모로 부터 값을 가져오지 않아도 무조건 써야함
    this.radius = radius;
  }
  getArea() {
    console.log(`Circle의 넓이는 ${this.radius * this.radius * 3.14}`);
  }
}

const rectangle1 = new Rectangle(5, 7);
const triangle1 = new Triangle(5, 7);
const circle1 = new Circle(5);

rectangle1.getArea();
triangle1.getArea();
circle1.getArea();
