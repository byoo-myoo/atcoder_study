export const 不特定のものを配列として保存 = () => {
  const input = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n");

  // 1行目: N, X を取得
  const [N, X] = input[0].split(" ").map(Number);

  // 2行目の不特定要素数 A1, A2, ..., AN を取得
  const A = input[1].split(" ").map(Number);
};
