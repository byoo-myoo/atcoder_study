const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 1行目: N, X を取得
const [N, X] = input[0].split(" ").map(Number);

// 2行目の A1, A2, ..., AN を取得
const A = input[1].split(" ").map(Number);

// X が A の中にあるかを判定
console.log(A.includes(X) ? "Yes" : "No");