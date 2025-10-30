function countSort(arr) {
    let n = arr.length;
    let buckets = Array.from({ length: 100 }, () => []);

    for (let i = 0; i < n; i++) {
        let [num, str] = arr[i];
        num = parseInt(num);
        if (i < n / 2) str = '-';
        buckets[num].push(str);
    }

    console.log(buckets.flat().join(' '));
    
}