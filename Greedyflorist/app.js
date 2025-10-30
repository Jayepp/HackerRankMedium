function getMinimumCost(k, c) {
   
    c.sort((a, b) => b - a);

    let totalCost = 0;
    let purchaseCount = 0;

   
    for (let i = 0; i < c.length; i++) {
        
        const multiplier = Math.floor(i / k) + 1;
        totalCost += multiplier * c[i];
    }

    return totalCost;
}