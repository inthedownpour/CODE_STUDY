let input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');
let n = +input.shift();
let city = [];
for (let x of input) {
    city.push(x.split(" ").map((e) => +e));
}

// 4
// [
//     [0, 10, 15, 20],
//     [5, 0, 9, 10],
//     [6, 13, 0, 12],
//     [8, 8, 9, 0]
// ]

const solution = (n, city) => {
    let answer = [];
    let visited = new Array(n).fill(0); // [0, 0, 0, 0]
    let tmp = [];
    const dfs = (cnt, curNode) => {
        if (cnt === n - 1) visited[0] = 0; // 다시 원래의 도시로 돌아 올 수 있게 하기 위해서    // 마지막(n-1)은 원래의 도시로 돌아와야하니까
        if (cnt === n) {
            // every() : 배열에서 true인 값을 반환
            if (visited.every((e) => e === 1)) {
                // 모든 도시를 방문했다면! 누적한 비용의 합을 answer에 저장
                answer.push(tmp.reduce((a, c) => a + c, 0));
            }
        } else {
            for (let i = 0; i < n; i++) {
                if (!city[curNode][i]) continue; // 값이 없는 곳은 건너 뛴다.
                if (!visited[i] && curNode !== i) {
                    // 방문한적이 없고 자기자신이 아닌곳은 방문
                    visited[i] = 1;
                    tmp.push(city[curNode][i]); // 비용을 tmp 배열에 누적
                    dfs(cnt + 1, i);
                    tmp.pop();
                    visited[i] = 0;
                }
            }
        }
    };
    visited[0] = 1; // 0부터 방문 시작
    dfs(0, 0); //dfs(cnt, curNode)
    return Math.min(...answer); // [ 39, 35, 46, 40, 43, 47 ]
};

console.log(solution(n, city));