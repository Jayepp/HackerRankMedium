function sherlockAndAnagrams(s) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const sub = s.slice(i, j).split('').sort().join('');
            map.set(sub, (map.get(sub) || 0) + 1);
        }
    }

    let count = 0;
    for (let val of map.values()) {
        count += (val * (val - 1)) / 2;
    }
    return count;
}
