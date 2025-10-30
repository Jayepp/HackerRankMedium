function cost(B) {
    const n = B.length;
    let low = 0, high = 0;

    for (let i = 1; i < n; i++) {
        const newLow = Math.max(low, high + Math.abs(B[i - 1] - 1));
        const newHigh = Math.max(low + Math.abs(B[i] - 1), high + Math.abs(B[i] - B[i - 1]));
        low = newLow;
        high = newHigh;
    }

    return Math.max(low, high);
}
