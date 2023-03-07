const input = require('fs').readFileSync(0).toString().split('\n').map(i => i.trim().split(' ').map(Number));
// input [
//     [ 3, 3 ],
//     [ 1, 1, 1 ],
//     [ 2, 2, 2 ],
//     [ 0, 1, 0 ],
//     [ 3, 3, 3 ],
//     [ 4, 4, 4 ],
//     [ 5, 5, 100 ],
//     [ 0 ]
//   ]

const [row, col] = input.shift();
const arr = new Array(col).fill(0);
let array = [];

// = let arr = Array.from(new Array(row), () => new Array(col).fill(0));
for (let i = 0; i < row; i++) {
    array.push([...arr]); // 전개 구문
}

for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        //input[0] = [ 1, 1, 1 ]
        //input[0][0] = 1
        //input[3][0] = 3
        console.log(i, j, i+row, array[i][j], input[i][j], input[i + row][j])
        // 0 0 3 0 1 3 0행 0열
        // 0 1 3 0 1 3 0행 1열
        // 0 2 3 0 1 3 0행 2열
        // 1 0 4 0 2 4
        // 1 1 4 0 2 4
        // 1 2 4 0 2 4
        // 2 0 5 0 0 5
        // 2 1 5 0 1 5
        // 2 2 5 0 0 100
        //행렬 합 = 행렬 A + 행렬 B
        array[i][j] = input[i][j] + input[i + row][j];

    }
}

let result = '';
for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        result += `${array[i][j]} `;
    }
    result += '\n'
}

console.log(result);