let input = require("fs").readFileSync("/dev/stdin").toString().split("");
let answer = '';

for (let i = 0; i < input.length; i++) {
    let ascii = input[i].charCodeAt();

    //a~z
    if (ascii >= 65 && ascii <= 90) {
        var upper = ascii + 13;
        if (upper > 90) {
            answer += String.fromCharCode(upper - 26);
        } else {
            answer += String.fromCharCode(upper);
        }
    //A~Z
    } else if (ascii >= 97 && ascii <= 122) {
        var lower = ascii + 13;
        if (lower > 122) {
            answer += String.fromCharCode(lower - 26);
        } else {
            answer += String.fromCharCode(lower);
        }
    } else if (ascii === 32) {
        answer += ' ';
    } else {
        answer += input[i];
    }
}
console.log(answer);