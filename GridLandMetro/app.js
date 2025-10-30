function gridlandMetro(n, m, k, track) {
    const map = new Map();

    for (let [r, c1, c2] of track) {
        if (!map.has(r)) map.set(r, []);
        map.get(r).push([c1, c2]);
    }

    let occupied = 0;

    for (let [_, intervals] of map) {
        intervals.sort((a, b) => a[0] - b[0]);
        let [start, end] = intervals[0];

        for (let i = 1; i < intervals.length; i++) {
            const [c1, c2] = intervals[i];
            if (c1 <= end + 1) end = Math.max(end, c2);
            else {
                occupied += end - start + 1;
                [start, end] = [c1, c2];
            }
        }
        occupied += end - start + 1;
    }

    return BigInt(n) * BigInt(m) - BigInt(occupied);
}
