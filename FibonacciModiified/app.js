function fibonacciModified(t1, t2, n) {
   
    let a = BigInt(t1);
    let b = BigInt(t2);
    let c;

    for (let i = 3; i <= n; i++) {
        c = a + b * b; 
        a = b;
        b = c;
    }

    
    return b.toString();

}
