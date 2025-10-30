function absolutePermutation(n, k) {
    let res = [];
    if (k === 0) {
        for (let i = 1; i <= n; i++) res.push(i);
        return res;
    }
    if (n % (2 * k) !== 0) return [-1];
    let add = true;
    for (let i = 1; i <= n; i++) {
        res.push(add ? i + k : i - k);
        if (i % k === 0) add = !add;
    }
    return res;
}

