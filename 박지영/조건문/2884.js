const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let H = +input[0];
let M = +input[1];

if (H == 0 && M < 45) {
    console.log(23, 15 + M);
} else if(M < 45) {
    console.log(H - 1, 15 + M);
}else if(M >= 45) {
    console.log(H, M - 45);
}