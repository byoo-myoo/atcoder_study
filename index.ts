const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
let numInput = Number(input);

let x = 1;
while (x < numInput) {
  x *= 2; // numInput 以上になるまで倍にする
}

let bitNum = "";
while (x >= 1) {
  // x が 1 以上の間ループ
  if (numInput >= x) {
    numInput -= x;
    bitNum += "1";
  } else {
    bitNum += "0";
  }
  x /= 2;
}

// 10桁に調整 (左側に0を埋める)
bitNum = bitNum.padStart(10, "0").slice(-10);
console.log(bitNum);
