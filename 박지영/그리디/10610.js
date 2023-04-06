let input = require('fs').readFileSync('/dev/stdin').toString().trim();

// 30은 3의 배수이면서 10의 배수이기도 해야 한다.
let nums = input.split('');
const sum = nums.reduce((acc, cur) => acc + parseInt(cur), 0);

if (!input.includes("0") || sum % 3 !== 0) {
    console.log(-1);
} else {
    const result = nums.sort((a, b) => b - a).join('');
    console.log(result);
}


// function solution(input) {
//     if (!input.includes("0")) {
//         return -1;
//     } else {
//         let nums = input.split('');
//         const sum = nums.reduce((acc, cur) => acc + parseInt(cur), 0);
//         if (sum % 3 !== 0) {
//             return -1;
//         }
//         const result = nums.sort((a, b) => b - a).join('');
//         return result;
//     }
// }

// console.log(solution(input));