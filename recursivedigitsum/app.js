function superDigit(n, k) {
   
    let sum = 0n; 
    for (let ch of n) {
        sum += BigInt(ch);
    }

    
    sum *= BigInt(k);

    
    while (sum >= 10n) {
        let temp = 0n;
        for (let digit of sum.toString()) {
            temp += BigInt(digit);
        }
        sum = temp;
    }

   
    return Number(sum);
}