let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let countGroupword = 0;

for (let i = 1; i <= N; i++) {
    const str = input[i];
    const letter = [];
    let isGroupWord = true;

    for (let j = 0; j < str.length; j++) {
        if (letter.indexOf(str[j]) === -1) {
            letter.push(str[j]);
            console.log(letter[j])
        } else {
            if (letter.indexOf(str[j]) !== letter.length - 1) {
                isGroupWord = false;
                break;
            }
        }
    }
    if (isGroupWord) {
        countGroupword += 1;
    }
}
console.log(countGroupword);

// indexOf() : 원하는 문자열을 찾거나 배열의 값을 찾음
// => -1일 경우 찾는 값이 없음
// => 존재하는 경우에는 문자열의 시작위치에 해당하는 index 반환

// 비슷한 걸로 match()가 존재하는데
// 문자열에만 사용 가능하다.
// 다만 정규 표현식을 사용할 수 있다.