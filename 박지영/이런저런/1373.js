let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = '';

// inputs의 길이가 3보다 클 때에는 slice함수를 사용하여
// 가장 뒤에 있는 3글자를 추출하여 parseInt로 2진수로 변환해주고,
// 해당 숫자를 toString함수를 이용하여 8진수로 변환해서 answer 앞에 붙여준다.
while (input.length >= 3) {
    answer = parseInt(input.slice(input.length - 3), 2).toString(8) + answer;
    //변환을 마친 후엔 inputs의 뒤의 3글자를 제거해준다.
    input = input.slice(0, input.length - 3);
}

if (input.length !== 0) {
    answer = parseInt(input, 2).toString(8) + answer;
}

console.log(answer);