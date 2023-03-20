let input = require('fs').readFileSync('/dev/stdin').toString();

console.log(input.charCodeAt());

// 1. 문자에서 아스키코드로 변환
// 문자.charCodeAt((자릿수))

// 2. 아스키코드에서 문자로 변환
// 문자.fromCharCode()