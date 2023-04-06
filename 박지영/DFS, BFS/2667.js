let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input.shift();
let arr = input.map((item) => item.split('').map(Number));

const cnt_arr = [];
let cnt;

//탐색 시작점을 모르기 때문에 그래프 전체를 반복문으로 돌면서 bfs 시작
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (arr[i][j]) {
            cnt = 0;
            bfs(i, j);
            cnt_arr.push(cnt)
        }
    }
}

cnt_arr.sort((a,b)=>a-b);
console.log(cnt_arr.length);
console.log(cnt_arr.join('\n'));

function bfs(row, col) {
    if (!arr[row, col]) return;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    //탐색 중 1인 부분은 0으로 바꿔 다시 방문하지 않도록 한다
    arr[row][col] = 0;
    const queue = [];
    queue.push([row, col]);

    while (queue.length) {
        const [x, y] = queue.shift();
        cnt++;
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]];
            if (nx >= 0 && ny >= 0 && nx < n && ny < n && arr[nx][ny]) {
                arr[nx][ny] = 0;
                queue.push([nx, ny]);
            }
        }
    }
}