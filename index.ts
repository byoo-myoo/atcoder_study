const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
const [S1, S2] = input.split(" ");

const SICK = "sick";
const FINE = "fine";

let out = 0;
if (S1 === S2) {
  if (S1 === SICK) {
    out = 1;
  } else {
    out = 4;
  }
} else {
  if (S1 === SICK) {
    out = 2;
  } else {
    out = 3;
  }
}
console.log(out);
