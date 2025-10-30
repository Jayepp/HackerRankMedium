function almostSorted(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const diff = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sorted[i]) diff.push(i);
    }

    if (diff.length === 0) {
        console.log("yes");
    } else if (diff.length === 2) {
        console.log("yes");
        console.log(`swap ${diff[0] + 1} ${diff[1] + 1}`);
    } else {
        const i = diff[0];
        const j = diff[diff.length - 1];
        const reversed = [...arr];
        const sub = reversed.slice(i, j + 1).reverse();
        reversed.splice(i, j - i + 1, ...sub);
        if (reversed.every((v, k) => v === sorted[k])) {
            console.log("yes");
            console.log(`reverse ${i + 1} ${j + 1}`);
        } else {
            console.log("no");
        }
    }
}
