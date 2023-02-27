let input = require('fs').readFileSync('/dev/stdin').toString();

let alphabet = []
for (let i=97; i < 123; i++){
    alphabet += input.indexOf(String.fromCharCode(i)) + ' '
}
console.log(alphabet);

// String.indexOf(searchValue, position)
// 특정 문자가 문자열의 어느 index에 위치하는지 찾음

// String.CharAt(index)
// 주어진 문자열의 index 위치의 문자를 읽어서 리턴