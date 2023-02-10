//구구단
for (let i = 2; i <= 9; i += 1) {
  console.log(`-----------${i}단`);
  for (let j = 1; j <= 10; j += 1) {
    console.log(`${i}X${j}=${i * j}`);
  }
  console.log(`\n`); //한줄
}
