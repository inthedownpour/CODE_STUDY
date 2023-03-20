let [n, ...numbers] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
numbers = numbers[0].split(' ').map(v => Number(v))
//최소한 자기 자신은 가지고 있기 때문에 1로 채움
const dp = new Array(+n).fill(1);

for (let i = 1; i < +n; i++) {
    const values = [1];
    for (let j = 0; j < i; j++) {
        if (numbers[i] > numbers[j]) {
            values.push(dp[j] + 1);
        }
    }
    dp[i] = Math.max(...values);
    console.log(dp[i])
}
console.log(Math.max(...dp));

// 1. dp[0]
// 우선 첫번째 요소인 100은 반복문을 돌 필요가 없으므로 dp[0] = 1 (위에서 초기에 저장된 값임)
// => dp[0] = 1

// 2. dp[1]
// 자기보다 앞에 있는 요소들과 비교한다.
// 1) if(numbers[0] < numbers[1]) => O
//   → 여기서 numbers[0]이 numbers[1]보다 작다는 것은 dp[0]에 numbers[1]을 붙일 수 있다는 말이 된다. 그러므로 dp[1] = dp[0] + 1 = 2가 된다.
//   => dp[1] = 2

// 3. dp[2]
// 자기보다 앞에 있는 요소들(dp[0], dp[1])과 비교한다.
// 1) if(numbers[0] < numbers[2]) => X
// 2) if(numbers[1] < numbers[2]) => X
// 자신보다 작은 값이 없기 때문에 dp[i] 는 초기값 1에서 변함이 없다. dp[2] = 1
//   => dp[2] = 1

// 4. dp[3]
// 자기보다 앞에 있는 요소들(dp[0], dp[1], dp[2])과 비교한다.
// 1) if(numbers[0] < numbers[3]) => X
// 2) if(numbers[1] < numbers[3]) => X
// 3) if(numbers[2] < numbers[3]) => O
// → 여기서 numbers[2]가 numbers[3]보다 작다는 것은 dp[2]에 numbers[3]을 붙일 수 있다는 말이 된다. 그러므로 dp[3] =  dp[2] + 1 = 2가 된다.
//   => dp[3] = 2

// 5. dp[4]
// 자기보다 앞에 있는 요소들 (dp[0], dp[1], dp[2], dp[3])과 비교한다.
// 1) if(numbers[0] < numbers[4]) => X
// 2) if(numbers[1] < numbers[4]) => X
// 3) if(numbers[2] < numbers[4]) => O
// → 여기서 numbers[2]가 numbers[4]보다 작다는 것은 dp[2]에 numbers[4]을 붙일 수 있다는 말이 된다. 그러므로 dp[4] =  dp[2] + 1 = 2가 된다.
// 4) if(numbers[3] < numbers[4]) => O
// → 여기서 numbers[3]이 numbers[4]보다 작다는 것은 dp[3]에 numbers[4]을 붙일 수 있다는 말이 된다. 그러므로 dp[4] =  dp[3] + 1 = 3이 된다.
// 위의 값들 중 최댓값인 3을 저장한다. 따라서 dp[4] = 3
//   => dp[4] = 3