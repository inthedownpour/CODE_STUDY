const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

for (let i = 0; i < +input; i += 4) {
    process.stdout.write('long ');
}
process.stdout.write('int');