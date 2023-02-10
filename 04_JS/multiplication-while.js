//while이용해서 구구단
let i = 2;
let j = 1;
while (i < 10) {
  while (j < 20) {
    console.log(`${i}x${j}=${i * j}`);
    j++;
  }
  i++;
  j = 1;
}
