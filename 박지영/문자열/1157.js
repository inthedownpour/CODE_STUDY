let input = require('fs').readFileSync('/dev/stdin').toString().trim();
input = input.toLowerCase().split('');
console.log(input);

const count = (arr) => arr.reduce((ac, v)=>({ ...ac, [v] : (ac[v] || 0) + 1}), {});
const result = count(input)
console.log(result)