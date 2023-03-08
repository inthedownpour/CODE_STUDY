const input = require('fs').readFileSync(0).toString().split('\n');

let arr = Array.from(new Array(100), () => Array(100).fill(0));
const num = input.shift();
let answer = 0;

for (let i = 0; i < num; i++) {
    let x = +input[i].split(' ')[0];
    let y = +input[i].split(' ')[1];

    for (let j = x; j < x + 10; j++) {
        for (let k = y; k < y + 10; k++) {
            if (arr[j][k] === 0) {
                arr[j][k] = 1;
                answer++;
            }
        }
    }
}
console.log(answer);

// const answer = paper.reduce((prev, curr) => {
//     for (const el of curr) {
//         if (el) {
//             prev++;
//         }
//     }
//     return prev;
// }, 0);

// console.log(answer);