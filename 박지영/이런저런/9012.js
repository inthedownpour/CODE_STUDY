const input = require('fs').readFileSync(0).toString().trim().split('\n');
const testCase = input.shift();

let answer = ""
for (let i = 0; i < testCase; i++) {
    let count = 0;
    let splited = input[i].split('');
    for (const s in splited) {
        if (count < 0) {
            break;
        } else {
            if (splited[s] === '(') {
                count += 1;
            } else {
                count -= 1;
            }
        }
    }
    if (count === 0) {
        answer += 'YES\n';
    } else {
        answer += 'NO\n';
    }
}
console.log(answer)