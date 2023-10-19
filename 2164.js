const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let N = require("fs").readFileSync(filePath);
N = parseInt(N);

let result = 1;
while (result * 2 <= N) {
  result *= 2;
}
if (result !== N) {
  result = (N - result) * 2;
}

console.log(result);
