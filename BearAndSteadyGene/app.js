function steadyGene(gene) {
    const n = gene.length;
    const count = { A: 0, C: 0, G: 0, T: 0 };

    for (let ch of gene) count[ch]++;
    const target = n / 4;
    let left = 0, minLen = n;

    for (let right = 0; right < n; right++) {
        count[gene[right]]--;
        while (
            count['A'] <= target &&
            count['C'] <= target &&
            count['G'] <= target &&
            count['T'] <= target
        ) {
            minLen = Math.min(minLen, right - left + 1);
            count[gene[left]]++;
            left++;
        }
    }
    return minLen;
}
