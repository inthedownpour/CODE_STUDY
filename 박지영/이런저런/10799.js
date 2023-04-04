//스택
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

const sticks = [];
let answer = 0;

for (let i = 0; i < input.length; i++) {
    const str = input[i];

    // 레이저 발사("("바로 뒤에 ")"이 오는 경우)
    if (str === "(" && input[i + 1] === ")") {
        answer += sticks.length;
        // 앞에서 레이저 처리를 했음으로 ")"을 한칸 넘어가기 위해
        // i를 1 증가시켜 for문을 한 사이클 넘긴다
        i += 1;
    }
    // 쇠막대기 시작
    else if (str === "(") {
        sticks.push(str);
    }
    // 쇠막대기 끝
    else if (str === ")") {
        sticks.pop();
        answer += 1;
    }
}
console.log(answer);