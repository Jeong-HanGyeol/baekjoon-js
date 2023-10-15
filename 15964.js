const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let func = (a, b) => {
  return (a + b) * (a - b);
};

rl.on("line", (line) => {
  let arr = line.split(" ");
  let A = parseInt(arr[0]);
  let B = parseInt(arr[1]);

  console.log(func(A, B));
});
