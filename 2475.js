const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let func = (param) => {
  let arr = param.split(" ");
  let a = parseInt(arr[0]) ** 2;
  let b = parseInt(arr[1]) ** 2;
  let c = parseInt(arr[2]) ** 2;
  let d = parseInt(arr[3]) ** 2;
  let e = parseInt(arr[4]) ** 2;

  console.log((a + b + c + d + e) % 10);
};

rl.on("line", (line) => {
  func(line);
});
