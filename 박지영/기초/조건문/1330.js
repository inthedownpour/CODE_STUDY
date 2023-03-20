const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

input = input.split(' ')

let numA = +input[0]
let numB = +input[1]

if (numA > numB) {
    console.log('>');
}else if(numA < numB) {
    console.log('<');
}else {
    console.log('==');
}