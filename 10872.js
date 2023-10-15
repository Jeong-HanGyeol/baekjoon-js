const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let N = parseInt(line);
  let answer = 1;

  for (let i = 1; i <= N; i++) {
    answer *= i;
  }

  console.log(answer);
});
