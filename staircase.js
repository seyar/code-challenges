function staircase(n) {
    let res = '';
    for (let i = 1; i <= n; i++) {
        res += new Array(n - i).fill(' ').join('') + new Array(i).fill('#').join('') + '\n';
    }
    console.log(res);

    return res;
}

staircase(6);
