function organizingContainers(container) {
    let n = container.length;
    let rowSum = Array(n).fill(0);
    let colSum = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rowSum[i] += container[i][j];
            colSum[j] += container[i][j];
        }
    }

    rowSum.sort((a, b) => a - b);
    colSum.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (rowSum[i] !== colSum[i]) return "Impossible";
    }
    return "Possible";
}
