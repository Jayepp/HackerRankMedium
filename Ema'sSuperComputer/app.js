function twoPluses(grid) {
    const h = grid.length, w = grid[0].length;
    grid = grid.map(row => row.split(''));

    const plusSize = (r, c) => {
        let size = 0;
        while (
            r - size >= 0 && r + size < h &&
            c - size >= 0 && c + size < w &&
            grid[r - size][c] === 'G' &&
            grid[r + size][c] === 'G' &&
            grid[r][c - size] === 'G' &&
            grid[r][c + size] === 'G'
        ) size++;
        return size - 1;
    };

    const getCells = (r, c, s) => {
        const cells = new Set();
        for (let i = -s; i <= s; i++) {
            cells.add(`${r + i},${c}`);
            cells.add(`${r},${c + i}`);
        }
        return cells;
    };

    const pluses = [];
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (grid[i][j] === 'G') {
                const maxS = plusSize(i, j);
                for (let s = 0; s <= maxS; s++) {
                    pluses.push(getCells(i, j, s));
                }
            }
        }
    }

    let max = 0;
    for (let i = 0; i < pluses.length; i++) {
        for (let j = i + 1; j < pluses.length; j++) {
            const overlap = [...pluses[i]].some(x => pluses[j].has(x));
            if (!overlap) {
                const area = pluses[i].size * pluses[j].size;
                if (area > max) max = area;
            }
        }
    }
    return max;
}
