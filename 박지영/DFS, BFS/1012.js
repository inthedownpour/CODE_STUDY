let [t, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function bfs(x, y) {
    const queue = [[x, y]];
    let dx = [1, 0, -1, 0];
    let dy = [0, 1, 0, -1];

    while (queue.length) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            let [nx, ny] = [x + dx[i], y + dy[i]];
            if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
            if (visited[nx][ny]) continue;
            if (map[nx][ny] && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }
}


for (let i = 0; i < +t; i++) {
    let worm = 0;
    var [m, n, k] = input.shift().split(' ').map(Number);
    var visited = Array.from({ length: m }, () => Array.from({ length: n }, () => false));
    var map = Array.from(Array(m), () => new Array(n).fill(0));

    // let list = input.splice(0, k);
    for (let j = 0; j < k; j++) {
        const [x, y] = input.shift().split(' ').map(Number);
        map[x][y] = 1;
    }

    for (let k = 0; k < m; k++) {
        for (let l = 0; l < n; l++) {
            if (map[k][l] === 1 && !visited[k][l]) {
                visited[k][l] = true;
                bfs(k, l);
                worm++;
            }
        }
    }
    console.log(worm);
}