var maxProfit = function(prices) {
    let minPrice = prices[0]
    let maxProfit = 0 
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i]
        }
        let currentProfit = prices[i] - minPrice
        if(currentProfit > maxProfit) {
            maxProfit = currentProfit
        }
    }
    return maxProfit
};

const solution = maxProfit([7,5,5,3,6,4,1])
console.log(solution)