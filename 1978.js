const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
let N = parseInt(input[0]);
let arr = input[1].split(" ");
let answer = 0;

function isPrime(number) {
  // 2 미만의 숫자는 소수가 아닙니다.
  if (number < 2) {
    return false;
  }

  // 2는 유일한 짝수 소수이므로 2일 경우에는 true를 반환합니다.
  if (number === 2) {
    return true;
  }

  // 2를 제외한 모든 짝수는 소수가 아닙니다.
  if (number % 2 === 0) {
    return false;
  }

  // 제곱근까지만 숫자를 검사합니다.
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  // 위의 조건을 모두 통과하면 소수입니다.
  return true;
}

for (let i = 0; i < N; i++) {
  if (isPrime(Number(arr[i]))) {
    answer++;
  }
}

console.log(answer);
