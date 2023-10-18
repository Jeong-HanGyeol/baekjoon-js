let rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function func(number) {
  let count = 0; // 세상의 종말 수를 찾기 위한 카운터
  let num = 0; // 현재 검사 중인 수
  let arr = [];

  while (count < number) {
    num++;
    if (num.toString().includes("666")) {
      count++;
    }
  }

  return num;
}

rl.on("line", (line) => {
  let N = parseInt(line);

  console.log(func(N));
});
