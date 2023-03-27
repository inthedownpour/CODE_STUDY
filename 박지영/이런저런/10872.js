let input = require('fs').readFileSync('/dev/stdin').toString();

function factorial(n) {
    if (n > 1)
        return n * factorial(n - 1);
    else
        return 1;
}

let result = factorial(+input);
console.log(result);