//메모리 초과로 백준 풀이 불가
let [...input] = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);

input.sort((a, b) => {
    return a - b;
})

console.log(input.join('\n'))

// Python
// import sys

// N  = int(sys.stdin.readline())
// arr = [0]*10001

// for _ in range(N):
//     num = int(sys.stdin.readline())
//     arr[num] += 1 # arr[num]에 num이 들어온 개수 count

// for i in range(10001):
// 	# arr[i]에 숫자가 들어왔다면
//     if arr[i] != 0:
//     	# arr[num]에 num이 들어온 개수 만큼 출력
//         for j in range(arr[i]):
//             print(i)