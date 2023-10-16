const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let setArr = [...new Set(input)];
setArr.shift();

let answer = setArr
  .sort()
  .sort((a, b) => a.length - b.length)
  .join("\n");

console.log(answer);
