function counterGame(n) {
    n = BigInt(n);
    let turn = 0; 

    while (n > 1n) {
        if ((n & (n - 1n)) === 0n) {
           
            n = n / 2n;
        } else {
          
            let p = 1n;
            while (p * 2n < n) {
                p *= 2n;
            }
            n -= p;
        }
        turn ^= 1; 
    }

   
    return turn === 1 ? "Louise" : "Richard";
}