let [ns, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, s] = ns.split(' ').map(Number);
nums = nums.split(' ').map(Number);

// 원소가 n개인 집합에서 부분집합의 개수는 2^n개
const solution = (n, s, nums) => {
    let answer = 0;
    const dfs = (cur, sum) => {
        if (cur === n) {
            if (sum === s) {
                answer++;
            }
            return;
        } else {
            dfs(cur + 1, sum + nums[cur]);
            dfs(cur + 1, sum);
        }
    };
    dfs(0, 0);
    // 아무것도 포함 안 한 부분집합의 합이 0이기 때문에 그것은 제외
    // = 공집합
    if (s === 0) {
        answer--;
    }
    return answer;
};

console.log(solution(n, s, nums));