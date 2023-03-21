const input = require('fs').readFileSync(0).toString().trim().split('\n');
const testCase = input.shift();

let arr = [];
for (let i = 0; i < testCase; i++) {
    const [age, name] = input[i].split(' ');
    arr.push([age, name]);
}

let answer = '';
arr.sort((a, b) => {
    if(a[0] === b[0]) {
        return a[1] - b[1];
    }else {
        return a[0] - b[0];
    }
}).forEach(e => {
    answer += `${e[0]} ${e[1]}\n`
})
console.log(answer)