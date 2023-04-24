let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input[0];
const [...arrN] = input[1].split(' ').map(Number);
const m = +input[2];
const [...arrM] = input[3].split(' ').map(Number);

arrN.sort((a, b) => a - b);

const binarySearch = (arrN, target) => {
    let start = 0;
    let end = arrN.length - 1;
    let mid;

    // 반복의 범위: 남겨진 배열들이 계속 짧아지면서 start 시점이 end 시점보다 커질때까지
    while (start <= end) {
        // 가운데 위치한 임의의 값을 선택한다
        mid = parseInt((start + end) / 2);

        // 선택한 값과 찾고자하는 값을 비교
        // 일치할 경우 = 존재
        if (target === arrN[mid]) {
            return 1;
        } else {
            // 이 경우 target이 좌측에 존재한다는 것을 알 수 있음
            // 범위를 수정해준다
            if (target < arrN[mid]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
    }
    return 0;
}

let answer = [];
arrM.forEach((e) => {
    let result = binarySearch(arrN, e);
    answer.push(result);
})

console.log(answer.join('\n'));