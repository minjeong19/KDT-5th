// function Kdt(name, gender) {
//   this.name = name;
//   this.gender = gender;
//   this.showName = function () {
//     console.log(`이름은  ${this.name}입니다. 성별은 ${this.gender}입니다.`);
//   };
// }
function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showName = () => {
    console.log(`이름은  ${this.name}입니다. 성별은 ${this.gender}입니다.`);
  };
}

let user1 = new Kdt("박지원", "남자");
let user2 = new Kdt("김민정", "여자");
let user3 = new Kdt("송민영", "여자");
let user4 = new Kdt("이찬호", "남자");

user1.showName();
user2.showName();
user3.showName();
user4.showName();
