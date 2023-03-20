let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let arr = input[0].split(' ');
let X = Number(arr[1]);

const newArr = input[1].split(' ');
let result = newArr.filter(item => item < X)
console.log(result.join(' '))

//아래 부분을 join으로 수정
// for (let i = 0; i < result.length; i++) {
//     process.stdout.write(`${result[i]} `);
// }

// var lines = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// var x = lines[0].split(' ')[1];
// console.log(lines[1].split(' ').map(function(e) { return parseInt(e); }).filter(function(e) { return e < x; }).join(' '));