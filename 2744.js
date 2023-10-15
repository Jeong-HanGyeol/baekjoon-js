const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isLower(strValue) {
  return strValue.match(new RegExp(/^[a-z]/)) !== null;
}

rl.on("line", (line) => {
  let arr = line.split("");
  let answer = "";

  arr.map((a) =>
    isLower(a) == true
      ? (answer += a.toUpperCase())
      : (answer += a.toLowerCase())
  );

  console.log(answer);
});
