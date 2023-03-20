// 시간 초과 조심 ㅜㅜ
// 2차원 배열의 sort() 사용법!
const input = require('fs').readFileSync(0).toString().trim().split('\n');
const testCase = input.shift();

let arr = [];
for (let i = 0; i < testCase; i++) {
    const cells = [];
    for (let j = 0; j < 2; j++) {
        cells.push(input[i].split(' ')[j])
    }
    arr.push(cells)
}

let answer = '';
arr.sort((a, b) => {
    if (a[0] === b[0]) {
        return a[1] - b[1];
    } else {
        return a[0] - b[0];
    };
}).forEach(e => {
    answer += `${e[0]} ${e[1]}\n`;
})

console.log(answer);

// for (let i = 0; i < testCase; i++) {
//     for (let j = 0; j < 2; j++) {
//         if (arr[i][0] < arr[i+1][0]) {
//             let temp = arr[i+1];
//             arr[i+1] = arr[i];
//             arr[i] = temp;
//         } else if(arr[i][0] == arr[i+1][0] && arr[i][1] < arr[i+1][1]) {
//             let temp = arr[i+1];
//             arr[i+1] = arr[i];
//             arr[i] = temp;
//         }
//     }
// }
// console.log(arr);