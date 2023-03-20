let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let countGroupword = 0;

for (let i = 1; i <= N; i++) {
    const str = input[i];
    const letter = []; //처음 발견한 문자를 담을 배열
    let isGroupWord = true;

    for (let j = 0; j < str.length; j++) {
        if (letter.indexOf(str[j]) === -1) { //만약 찾는 값이 없다면(중복이 아니라면)
            letter.push(str[j]); //letter 배열에 문자열의 글자를 넣어준다
        } else {
            //탐색한 글자가 letter 배열에 존재할 경우
            //해당 인덱스가 letter 배열의 마지막 요소가 아니라면
            //이전에 탐색되었으나, 다른 처음 발견된 글자 탐색 후 다시 발견된 경우이므로
            //그룹 단어에서 제외하고, 그룹단어로 카운트 하지 않는다
            if (letter.indexOf(str[j]) !== letter.length - 1) {
                //그룹 단어가 아니다
                isGroupWord = false;
                break;
            }
        }
    }
    //isGroupword가 true일 때만 실행
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