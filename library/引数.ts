export const 引数 = () => {

  const input = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n");

};
