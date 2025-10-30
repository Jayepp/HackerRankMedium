function climbingLeaderboard(ranked, player) {
    let uniqueRanked = [...new Set(ranked)];
    let result = [];
    let i = uniqueRanked.length - 1;

    for (let score of player) {
        while (i >= 0 && score >= uniqueRanked[i]) {
            i--;
        }
        result.push(i + 2);
    }

    return result;
}
