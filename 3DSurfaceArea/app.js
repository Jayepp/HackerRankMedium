function surfaceArea(A) {
    let h = A.length;
    let w = A[0].length;
    let area = 0;

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            area += 2;
            area += i === 0 ? A[i][j] : Math.max(A[i][j] - A[i - 1][j], 0);
            area += i === h - 1 ? A[i][j] : Math.max(A[i][j] - A[i + 1][j], 0);
            area += j === 0 ? A[i][j] : Math.max(A[i][j] - A[i][j - 1], 0);
            area += j === w - 1 ? A[i][j] : Math.max(A[i][j] - A[i][j + 1], 0);
        }
    }

    return area;
}

