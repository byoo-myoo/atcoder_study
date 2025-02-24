export const A03 = () => {
  const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

// 1行目: N, K を取得
const [N, K] = input[0].split(" ").map(Number);

// 2行目の A1, A2, ..., AN を取得
const A = input[1].split(" ").map(Number);
// 3行目の A1, A2, ..., AN を取得
const B = input[2].split(" ").map(Number);

let check = false;
for (let i = 0; i < N; i++) {
  const targetA = A[i];
  for (let j = 0; j < N; j++) {
    const targetB = B[j];
    if (targetA + targetB === K) {
      check = true;
    }
  }
}
if (check) {
  console.log("Yes");
} else {
  console.log("No");
}
};
