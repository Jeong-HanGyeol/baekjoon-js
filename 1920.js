const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");
let M = parseInt(input[2]);
const arrN = new Set(input[1].split(" "));
let arrM = input[3].split(" ");
let answer = [];

for (let i = 0; i < M; i++) {
  answer.push(arrN.has(arrM[i]) ? 1 : 0);
}

console.log(answer.join("\n"));
