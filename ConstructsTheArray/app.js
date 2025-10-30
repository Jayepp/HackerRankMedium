function countArray(n, k, x) {
    const MOD = 1000000007n;
    let end1 = 1n;
    let endNot1 = 0n;

    for (let i = 2; i <= n; i++) {
        const newEnd1 = endNot1 % MOD;
        const newEndNot1 = (end1 * BigInt(k - 1) + endNot1 * BigInt(k - 2)) % MOD;
        end1 = newEnd1;
        endNot1 = newEndNot1;
    }

    if (x === 1) return Number(end1 % MOD);

    const denom = BigInt(k - 1);
    
    const modPow = (a, e) => {
        let base = a % MOD;
        let exp = BigInt(e);
        let res = 1n;
        while (exp > 0n) {
            if (exp & 1n) res = (res * base) % MOD;
            base = (base * base) % MOD;
            exp >>= 1n;
        }
        return res;
    };
    const inv = modPow(denom, MOD - 2n);
    return Number((endNot1 * inv) % MOD);
}