export const A03 = () => {
  const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
  const [N, K] = input.split(" ").map(Number);

  let s = 0;
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      let k = K - (i + j); // `k` を直接求める
      if (1 <= k && k <= N) {
        // `k` が範囲内ならカウント
        s++;
      }
    }
  }
  console.log(s);
};
