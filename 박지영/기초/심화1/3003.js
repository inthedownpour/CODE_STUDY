let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let chess = [1, 1, 2, 2, 2, 8];
let result = [];

for (let i = 0; i < input.length; i++) {
    if (chess[i] === input[i]) {
        result[i] = 0;
    }else{
        result[i] = chess[i] - input[i]
    }
    process.stdout.write(result[i]+' ');
}



// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const chess = [1, 1, 2, 2, 2, 8];
// const answer = chess.map((v, i) => v - input[i]);
// console.log(answer.join(' '));