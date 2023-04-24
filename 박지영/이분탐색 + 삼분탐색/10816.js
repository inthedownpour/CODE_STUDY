let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const [...arrN] = input[1].split(' ').sort((a, b) => a - b).map(Number);
const [...arrM] = input[3].split(' ').map(Number);

let answer = [];

let result = [[arrN[0], 1]]; // 새로운 배열 생성
for (let i = 1; i < arrN.length; i++) {
    if (arrN[i - 1] === arrN[i]) { // arrN의 i번째 요소와 i+1번째 요소가 같다면
        result[result.length - 1][1]++; // result배열의 result.length-1 요소의 1번째 인덱스값을 증가
    } else {
        result.push([arrN[i], 1]); // result배열의 배열에 [arrN[i], 1] 요소가 추가됨
    }
}

arrM.forEach((v) => {
    let start = 0;
    let end = result.length - 1;
    let res = false;

    while (start <= end) {
        let mid = parseInt((start + end) / 2);

        if (v < result[mid][0]) { // 만약 C의 mid 번째 요소의 0번째 인덱스값이 탐색대상의 요소보다 크다면?
            end = mid - 1; // 끝 부분에서 절반으로 줄여서 탐색
        } else if (v > result[mid][0]) { // C의 mid번째 요소의 0번째 인덱스 값이 탐색대상의 요소보다 작다면?
            start = mid + 1; // 시작부분에서 절반으로 줄여서 탐색
        } else { // C의 mid번재 요소의 0번째 인덱스 값과 탐색 대상의 요소가 같다면? => 우리가 이분탐색을 통해 얻고자하는 값
            res = true;
            answer.push(result[mid][1]); // answer 에 C 배열 mid번째 요소 1번 인덱스를 담음.
            break; // 반복문 종료
        }
    }
    if (res === false) {
        answer.push(0);
    }
})
console.log(answer.join(' '));