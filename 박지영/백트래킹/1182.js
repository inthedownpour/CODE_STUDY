let [ns, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, s] = ns.split(' ').map(Number);
nums = nums.split(' ').map(Number);

const solve = (n, s, arr) => {
    let output = 0;
    // 고를 숫자의 인덱스(i)와 지금까지 고른 숫자들의 합(sum)을 인수로 받는다
    const dfs = (i, sum) => {
        // 순회가 끝나면 종료시킨다
        if (i === n) return;

        // i번째 숫자를 고르고 sum에 더한다
        sum += arr[i];
        // sum이 s와 같다면 output을 증가시킨다.
        if (sum === s) output++;

        // 다음에 고를 숫자의 인덱스(i+1)과 지금까지 고른 숫자들의 합을
        // recursion의 인수로 넣어 재귀 호출.
        // arr[i]를 고르고 arr[i+1]을 고르는 과정으로 넘어간다.
        recursion(i + 1, sum);
        // 다음에 고를 숫자의 인덱스(i+1)과 지금까지 고른 숫자들의 합에서
        // 이번에 고른 i번째 숫자를 뺀 값을 recursion의 인수로 넣어 재귀 호출한다
        //arr[i]를 고르지 않고 arr[i+1]을 고르는 과정으로 넘어간다.
        recursion(i + 1, sum - arr[i]);
    };

    recursion(0, 0);
    console.log(output);
};

solve(n, s, arr);