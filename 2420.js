const fs = require("fs");
let input = fs.readFileSync("./example.txt", "utf8").toString().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
let result = 0;
if (n <= 0 && m >= 0) {
  result = -n + m;
} else if (n >= 0 && m <= 0) {
  result = n + -m;
} else if (n >= 0 && m >= 0) {
  if (n >= m) {
    result = n - m;
  } else {
    result = m - n;
  }
} else if (n <= 0 && m <= 0) {
  if (n >= m) {
    result = n - m;
  } else {
    result = m - n;
  }
}

console.log(result);

[N, M] = require("fs").readFileSync("./example.txt", "utf8").split(" ");
console.log(Math.abs(N - M));
