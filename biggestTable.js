function biggestTable(grid) {
    const fi = (tables, st) => {
        return tables.find((table) => {
            return table.start[0] === st[0] && table.start[1] === st[1]
        })
    }

    let tables = []
	for (let i = 0; i < grid.length; i++) {
        tables[i] = []
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                const prev = typeof grid[i][j - 1] !== 'undefined' ? grid[i][j - 1] : undefined
                const parent = grid[i - 1] ? grid[i - 1][j] : undefined
                if ((prev === '0' || prev === undefined) && (parent === '0' || parent === undefined)) {
                    tables[i].push({
                        start: [i, j],
                        end: [i, j],
                        sq: 1
                    })
                }
                console.log("tables = ", tables);
                if (prev === '1') {
                    const last = tables[i][tables[i].length - 1];

                    last = {
                        start: last.start,
                        end: [last.end[i], j],
                        sq: last.sq + 1
                    }
                }
                // if (prev === '0' && parent === '1') {
                //     tables.push({
                //         start: [i, j],
                //         end: [i, j],
                //         sq: 1
                //     })

                // }
            }
        }
    }

	return Math.max.apply(null, tables.map((i) => i.sq));
};

// 10100
// 10111
// 11111
// 10010
var grid = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
];

console.log(biggestTable(grid));
