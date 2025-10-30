function maxMin(k, arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    let minUnfairness = Infinity;

    // Slide a window of size k through the array
    for (let i = 0; i <= arr.length - k; i++) {
        const currentUnfairness = arr[i + k - 1] - arr[i];
        if (currentUnfairness < minUnfairness) {
            minUnfairness = currentUnfairness;
        }
    }

    return minUnfairness;
}
