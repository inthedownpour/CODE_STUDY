// https://velog.io/@cada/BOJ-1074-Z
let [N, r, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let count = 0;
//recursive(시작 행, 시작 열, 행 개수(= 열 개수))
const recursive = (row, col, n) => {
    if (n === 1) {
        return;
    }
    const half = n / 2;
    //1 사분면
    if (r < row + half && c < col + half) {
        recursive(row, col, half);
    }
    //2 사분면
    else if (r < row + half && c >= col + half) {
        count += half ** 2;
        recursive(row, col + half, half);
    }
    //3 사분면
    else if (r >= row + half && c < col + half) {
        count += 2 * (half ** 2);
        recursive(row + half, col, half);
    }
    //4 사분면
    else {
        count += 3 * (half ** 2);
        recursive(row + half, col + half, half);
    }
}

// const solution = (row, col, n) => {
//     while (n-- > 0) {
//         let y = parseInt(Math.pow(2, n) / 2);
//         let x = y;

//         let temp = parseInt(Math.pow(2, n) / 2);
//         let skip = parseInt(Math.pow(4, n));

//         if (row < y && col < x) {
//             x -= temp;
//             y -= temp;
//         } else if (row < y && x <= col) {
//             x += temp;
//             y -= temp;
//             count += skip;
//         } else if (y <= row && col < x) {
//             x -= temp;
//             y += temp;
//             count += skip * 2;
//         } else {
//             x += temp;
//             y += temp;
//             count += skip * 3;
//         }
//     }
// }

// solution(r, c, N);
recursive(0, 0, 2 ** N);

console.log(count);