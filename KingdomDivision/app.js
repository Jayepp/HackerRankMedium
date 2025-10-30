function kingdomDivision(n, roads) {
    const MOD = 1e9 + 7;

    const tree = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of roads) {
        tree[u].push(v);
        tree[v].push(u);
    }
   
   const dp = Array.from({ length: n + 1 }, () => [0, 0]);

    function dfs(node, parent) {
        let same = 1;
        let diff = 1;

        for (const child of tree[node]) {
            if (child === parent) continue;

            dfs(child, node);
            const [csame, cdiff] = dp[child];

            
            same = (same * (csame + cdiff)) % MOD;

           
            diff = (diff * csame) % MOD;
        }

        dp[node] = [same, diff];
    }

    dfs(1, 0);

    
    return (2 * dp[1][1]) % MOD;
}
