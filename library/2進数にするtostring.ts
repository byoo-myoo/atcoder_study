export const A03 = () => {
  const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
  const numInput = Number(input);

  const bitNum = numInput.toString(2).padStart(10, "0");

  console.log(bitNum);
};
