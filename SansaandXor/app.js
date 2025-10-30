function sansaXor(arr) {
    const n = arr.length;
    let result = 0;

    for (let i = 0; i < n; i++) {
       
        const count = (i + 1) * (n - i);

        
        if (count % 2 === 1) {
            result ^= arr[i];
        }
    }

    return result;
}