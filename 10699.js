let date = new Date();
let year = String(date.getFullYear());
let month = date.getMonth() + 1;
let day = String(date.getDate());

month = Number(month) < 10 ? "0" + String(month) : String(month);

let result = year + "-" + month + "-" + day;

console.log(result);

console.log(new Date().toISOString().split("T")[0]);
