let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let n = +input[0];
let nums = input[1].split(' ').map(Number);

const isPrime = (n) => {
    if (n === 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true;
}

console.log(nums.filter(v => isPrime(v)).length);