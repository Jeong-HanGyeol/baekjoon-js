const fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a + b);

/*
fs module (= File System module) 이란, 파일 처리와 관련된 전반적인 작업을 하는 모듈을 말한다.
*/
