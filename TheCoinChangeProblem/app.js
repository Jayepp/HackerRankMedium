function getWays(n, c) {
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    for (let coin of c) {
        for (let i = coin; i <= n; i++) {
            dp[i] += dp[i - coin];
        }
    }
    return dp[n];
}
