function queensAttack(n, k, r_q, c_q, obstacles) {
   
    const directions = [
        [-1, 0],   
        [1, 0],    
        [0, -1],   
        [0, 1],   
        [-1, -1],  
        [-1, 1],  
        [1, -1],   
        [1, 1]    
    ];

  
    const obstacleSet = new Set(obstacles.map(obs => obs[0] + ',' + obs[1]));

    let count = 0;

    for (let [dr, dc] of directions) {
        let r = r_q + dr;
        let c = c_q + dc;
        while (r >= 1 && r <= n && c >= 1 && c <= n && !obstacleSet.has(r + ',' + c)) {
            count++;
            r += dr;
            c += dc;
        }
    }
    return count;
}
