function bomberMan(n, grid) {
    if (n === 1) return grid;
    if (n % 2 === 0) return grid.map(row => 'O'.repeat(row.length));

    const explode = g => {
        let h = g.length, w = g[0].length;
        let newGrid = Array.from({ length: h }, () => Array(w).fill('O'));
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                if (g[i][j] === 'O') {
                    newGrid[i][j] = '.';
                    if (i > 0) newGrid[i - 1][j] = '.';
                    if (i < h - 1) newGrid[i + 1][j] = '.';
                    if (j > 0) newGrid[i][j - 1] = '.';
                    if (j < w - 1) newGrid[i][j + 1] = '.';
                }
            }
        }
        return newGrid.map(r => r.join(''));
    };

    let first = explode(grid);
    let second = explode(first);

    if ((n - 3) % 4 === 0) return first;
    return second;
    
}

