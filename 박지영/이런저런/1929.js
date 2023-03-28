let [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const isPrime = (n) => {
    if (n === 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

const result = [];
for (let i = a; i <= b; i++) {
    if (isPrime(i) === true) {
        result.push(i);
    }
}

console.log(result.join('\n'));