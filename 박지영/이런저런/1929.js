let [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

//1과 자신만으로 나누어 떨어지는지 체크
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

for (let i = a; i <= b; i++) {
    if (isPrime(i) === true) {
        console.log(i);
    }
}