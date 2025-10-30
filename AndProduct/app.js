
function andProduct(a, b) {
   
    let A = BigInt(a);
    let B = BigInt(b);


    let shifts = 0n;

    
    while (A !== B) {
        A = A >> 1n;
        B = B >> 1n;
        shifts += 1n;
    }

   
    const result = A << shifts;

    
    return result.toString();
}
