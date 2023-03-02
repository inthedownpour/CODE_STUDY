let input = require('fs').readFileSync('/dev/stdin').toString();
let N = +input

for (let i = 1; i <= N; i++) {
    // i가 1일 때 공백이 4개
    // j = 1부터 N - i까지인 for문
    for (let j = 1; j <= N - i; j++) {
        process.stdout.write(' ')
    }
    // i가 1일 때 *이 1개
    // i가 2일 때 *이 3개
    // i가 i개일 때 *이 2*i - 1개
    for (let j = 1; j <= 2*i - 1; j++) {
        process.stdout.write('*')
    }
    process.stdout.write('\n');
}

// 거꾸로 반복
for (let i = N - 1; i >= 1; i--) {
    for (let j = 1; j <= N - i; j++) {
        process.stdout.write(' ')
    }
    for (let j = 1; j <= 2*i - 1; j++) {
        process.stdout.write('*')
    }
    process.stdout.write('\n');
}