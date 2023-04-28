const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}

let answer = '';
const temp = [];
const solution = () => {
    if (temp.length === m) {
        answer += `${temp.join(' ')}\n`
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        // 중복 제거
        if (temp.includes(arr[i])) continue;
        temp.push(arr[i]);
        solution(i);
        temp.pop();
    }
}

solution();
console.log(answer);

// let result = '';
// let arr = []; // 수열을 담을 배열(총 m개)
// let visited = new Array(n).fill(false); // 특정 수가 쓰였는지

// const solution = (k) => { // 현재 k개까지 수를 택한 상황에서 arr[k] 정하기
//     if (k === m) { // m개를 모두 택했으면
//         result += `${arr.join(' ')}\n`
//         return; //return을 만나면 돌아감
//     }

//     for (let i = 1; i <= n; i++) { // 1부터 n까지의 수에 대해
//         if (visited[i] === true) continue; // 이미 방문한 경우 패스
//         arr[k] = i; // k번째 수를 i로 정함
//         visited[i] = true; // 방문 표시
//         solution(k + 1); // 다음 수를 정하러 한 단계 더 들어감
//         visited[i] = false; // k번째 수를 i로 정한 모든 경우에 대해 다 확인했으니 이제 i를 사용되지 않았다고 명시함
//     }
// }

// solution(0); // 맨 처음에 수를 한 개도 택하지 않았으니 0대입
// console.log(result);