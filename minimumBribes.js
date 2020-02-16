function minimumBribes(q) {
    let result = ''
    let bribers = 0
    q.forEach((item, i) => {
        const pos = Number(item);
        if (pos - i - 1 > 2) {
            result = 'Too chaotic'
            return;
        }

        for (let j = Math.max(0, pos - 2); j < i; j++) {
            if (q[j] > item) {
                bribers += 1
            }
        }
    })

    return result || bribers;
}

const arr = "1 5 2 3 4";
const arr2 = "1 2 3 5 4";
const arr3 = "2 1 5 3 4";
const arr4 = "1 2 5 3 7 8 6 4";
console.log("minimumBribes = ", minimumBribes(arr4.split(' ')));

//     2   2 2
// 1 2 5 3 7 8 6 4
// 1 2 3 4 5 6 7 8
