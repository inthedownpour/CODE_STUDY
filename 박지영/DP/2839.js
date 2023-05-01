let n = +require("fs").readFileSync("/dev/stdin").toString().trim();

let cnt = 0;
while (true) {
    // 반복문을 통해 5로 나눌 수 있는 경우 5로 나누고
    // 아닐 경우, 3kg 봉지를 한 개 사용
    if (n % 5 === 0) {
        console.log(n / 5 + cnt);
        break;
    }
    // 만약 0보다 작을 경우 5kg, 3kg으로 배달할 수 없는 경우
    if (0 > n) {
        console.log(-1);
        break;
    }

    cnt++;
    n -= 3;
}