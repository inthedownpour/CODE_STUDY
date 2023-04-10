const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let result = '';
let arr = []; // 수열을 담을 배열(총 m개)

// 0값인 변수를 넣어서 현재 i와 비교해서 큰지, 작은지를 비교
const solution = (k) => { // 현재 k개까지 수를 택한 상황에서 arr[k] 정하기
    if (k === m) { // m개를 모두 택했으면
        result += `${arr.join(' ')}\n`
        return; //return을 만나면 돌아감
    }

    // 방문 표시 필요 없음
    for (let i = 1; i <= n; i++) { // 1부터 n까지의 수에 대해
        arr[k] = i; // k번째 수를 i로 정함
        solution(k + 1); // 다음 수를 정하러 한 단계 더 들어감
    }
}

solution(0); // 맨 처음에 수를 한 개도 택하지 않았으니 0대입
console.log(result);