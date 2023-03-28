let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let n = +input;

let idx = 2;
const result = [];
while (n !== 1) {
    if (n % idx === 0) {
        result.push(idx);
        n /= idx;
        idx = 2;
    } else {
        idx += 1;
    }
}
console.log(result.join('\n'));