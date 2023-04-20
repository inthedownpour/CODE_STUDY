let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const getCombination = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) {
        return arr.map((e) => [e]);
    }
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombination(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });
    return results;
}

for (let i = 0; i < input.length - 1; i++) {
    const [k, ...arr] = input[i].split(' ').map(Number);
    getCombination(arr, 6).forEach((numList)=>
    console.log(numList.join(' ')));
    console.log('');
}