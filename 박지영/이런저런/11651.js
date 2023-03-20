const input = require('fs').readFileSync(0).toString().trim().split('\n');
const testCase = input.shift();

let arr = [];
for (let i = 0; i < testCase; i++) {
    const cells = [];
    for (let j = 1; j >= 0; j--) {
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
    answer += `${e[1]} ${e[0]}\n`;
})

console.log(answer);