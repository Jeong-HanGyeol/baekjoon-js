let rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (line) => {
  if (line != 0) {
    console.log(isPalindrome(line) == true ? "yes" : "no");
  } else {
    rl.close();
  }
});

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
