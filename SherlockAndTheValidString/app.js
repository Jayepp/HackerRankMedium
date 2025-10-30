function isValid(s) {
    const freq = {};
    for (let ch of s) freq[ch] = (freq[ch] || 0) + 1;

    const counts = Object.values(freq);
    const countFreq = {};
    for (let c of counts) countFreq[c] = (countFreq[c] || 0) + 1;

    const keys = Object.keys(countFreq).map(Number);
    if (keys.length === 1) return "YES";
    if (keys.length > 2) return "NO";

    const [a, b] = keys;
    if ((countFreq[a] === 1 && (a - 1 === 0 || a - 1 === b)) ||
        (countFreq[b] === 1 && (b - 1 === 0 || b - 1 === a))) return "YES";

    return "NO";

    
}
