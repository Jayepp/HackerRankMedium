function stockmax(prices) {
  let maxFuture = 0;
  let profit = 0;

  
  for (let i = prices.length - 1; i >= 0; i--) {
    if (prices[i] > maxFuture) {
      maxFuture = prices[i]; 
    }
    profit += maxFuture - prices[i]; 
  }

  return profit;
}
