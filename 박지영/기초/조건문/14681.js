const fs = require('fs');
let input = fs.readFileSync(0).toString();

input = input.split('\n')

let numA = +input[0]
let numB = +input[1]

if (numA > 0 && numB > 0) {
    console.log(1);
} else if(numA < 0 && numB > 0) {
    console.log(2);
} else if(numA < 0 && numB < 0) {
    console.log(3);
} else {
    console.log(4);
}