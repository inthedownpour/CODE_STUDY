//https://gigibean.tistory.com/26
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let n = +input;

let cnt = 0;
while (n > 0) {
    n = parseInt(n / 5);
    cnt += n;
}
console.log(cnt);