// 투포인터
const [[n, s], arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((e) => e.split(' ').map(Number));

let sum = 0;
let minLength = Infinity; // 양의 무한대
let start = 0; // 시작
let end = 0; // 끝

// 반복문을 통해 j를 증가시키면서
while (end < n) {
    // arr[end]를 sum에 누적
    sum += arr[end];

    // sum이 s 이상일 때, s 미만이 될 때 까지 start를 증가시키면서
    // sum이 s 이상일 때의 길이를 갱신
    while (sum >= s) {
        sum -= arr[start];
        minLength = Math.min(minLength, end - start + 1);
        start++;
    }
    end++;
}

// 반복문이 끝난 후에 minLength가 갱신된 적이 없다면 0, 그 외에는 minLength 반환
console.log(minLength === Infinity ? 0 : minLength);