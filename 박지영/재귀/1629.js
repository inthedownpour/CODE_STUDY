let [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);

// 이 함수의 시간복잡도는 b가 계속 절반씩 깎이기 때문에 O(log b)
function pow(a, b, c) {
    // base condition으로 b===0을 줘도 됨
    if (b === 1n) return a % c;
    let result = pow(a, BigInt(parseInt(b / BigInt(2))), c);
    if (b % 2n) {
        return (((result * result) % c) * a) % c;
    } else {
        return (result * result) % c;
    }
}

console.log(Number(pow(a, b, c)));