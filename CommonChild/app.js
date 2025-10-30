function commonChild(s1, s2) {
    const n = s1.length;
    const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[n][n];
}
