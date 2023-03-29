var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().trim();
var answer = '';
while (inputs.length !== 0) {
    //314 중 1인 경우에, 001로 2진수 값이 나와야하는데, 1만 입력되게 된다.
    if (inputs.length > 1) {
        //padStart를 사용하여 세자리수를 0으로 채워서 대입
        answer = parseInt(inputs.slice(inputs.length - 1), 8).toString(2).padStart(3, '0') + answer;
    } else {
        answer = parseInt(inputs.slice(inputs.length - 1), 8).toString(2) + answer;
    }
    inputs = inputs.slice(0, inputs.length - 1);
}
console.log(answer);