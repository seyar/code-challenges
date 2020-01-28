function hourglassSum(arr) {
    const iterator = (i, arr, matrix) => {
        const row = Math.floor(i / matrix);
        const cell = i % matrix;
        const a = arr[row].slice(cell, cell + 3)
        .concat(arr[row + 1].slice(cell + 1, cell + 2))
        .concat(arr[row + 2].slice(cell, cell + 3));
console.log("a = ", row, cell, a);
            return a;
    }

    const matrix = 4;
    const sumsOfHourGlasses = new Array(matrix * matrix).fill(1).map((_item, i) =>
        iterator(i, arr, matrix).reduce((sum, current) => sum + current, 0)
    );

    return Math.max(...sumsOfHourGlasses);
}

const arr = [
[ 1, 1, 1, 0, 0, 0 ],
[ 0, 1, 0, 0, 0, 0 ],
[ 1, 1, 1, 0, 0, 0 ],
[ 0, 9, 2, -4, -4, 0 ],
[ 0, 0, 0, -2, 0, 0 ],
[ 0, 0, -1, -2, -4, 0 ],
];
hourglassSum(arr)
