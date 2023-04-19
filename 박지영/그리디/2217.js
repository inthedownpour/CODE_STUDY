let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map(Number).sort((a, b) => a - b);

// 사용된 로프 중에 단 한 개라도 중량을 견딜 수 없어서는 안되므로
// 로프들을 사용하여 들어올릴 수 있는 물체의 최대 중량은
// 버틸 수 있는 최대 중량이 가장 낮은 로프 * 로프의 개수
const result = [];

for (let i = 0; i < +n; i++) {
    result.push(arr[i] * [n - i]);
}

console.log(Math.max(...result));