let input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input[0];
const [...arrN] = input[1].split(' ').map(Number);
const m = +input[2];
const [...arrM] = input[3].split(' ').map(Number);

arrN.sort((a, b) => a - b);

const binarySearch = (arrN, target) => {
    let start = 0;
    let end = arrN.length - 1;
    let mid;

    while (start <= end) {
        mid = parseInt((start + end) / 2);

        if (target === arrN[mid]) {
            return 1;
        } else {
            if (target < arrN[mid]) {
                end = mid - 1
            }
            else {
                start = mid + 1
            }
        }
    }
    return 0;
}

let answer = [];
arrM.forEach((e) => {
    let result = binarySearch(arrN, e)
    answer.push(result);
})

console.log(answer.join('\n'));