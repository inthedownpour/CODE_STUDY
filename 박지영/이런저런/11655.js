let input = require("fs").readFileSync("/dev/stdin").toString().split("");
let answer = '';

for (let i = 0; i < input.length; i++) {
    let ascii = input[i].charCodeAt();

    //a~z
    if (ascii >= 65 && ascii <= 90) {
        var upper = ascii + 13;
        // 아스키코드에 13을 더해주고 해당 값이 대문자의 범위인 90을 넘는다면
        // 90에서 26을 빼준 값을 다시 대문자로 변환을
        if (upper > 90) {
            answer += String.fromCharCode(upper - 26);
        } else {
            answer += String.fromCharCode(upper);
        }
    //A~Z
    } else if (ascii >= 97 && ascii <= 122) {
        var lower = ascii + 13;
        // 소문자인 경우 122를 넘는다면 똑같이 26을 빼준 다음에 다시 대문자로 변환
        if (lower > 122) {
            answer += String.fromCharCode(lower - 26);
        } else {
            answer += String.fromCharCode(lower);
        }
    //32는 공백
    } else if (ascii === 32) {
        answer += ' ';
    } else {
        answer += input[i];
    }
}
console.log(answer);