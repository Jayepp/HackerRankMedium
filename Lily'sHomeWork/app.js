function lilysHomework(arr) {
    const swaps = a => {
        const n = a.length;
        const sorted = [...a].sort((x, y) => x - y);
        const map = new Map();
        for (let i = 0; i < n; i++) map.set(a[i], i);
        let count = 0;
        for (let i = 0; i < n; i++) {
            if (a[i] !== sorted[i]) {
                count++;
                const temp = a[i];
                const idx = map.get(sorted[i]);
                [a[i], a[idx]] = [a[idx], a[i]];
                map.set(temp, idx);
                map.set(sorted[i], i);
            }
        }
        return count;
    };
    return Math.min(swaps([...arr]), swaps([...arr].reverse()));
}


