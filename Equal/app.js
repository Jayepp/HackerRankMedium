function equal(arr) {
    const min = Math.min(...arr);
    let ans = Infinity;

    for (let base = 0; base < 5; base++) {
        let ops = 0;
        for (let a of arr) {
            let diff = a - (min - base);
            ops += Math.floor(diff / 5) + Math.floor((diff % 5) / 2) + (diff % 5) % 2;
        }
        ans = Math.min(ans, ops);
    }

    return ans;
}
