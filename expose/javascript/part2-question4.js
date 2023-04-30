// Question 4
function discountPrices(prices, discount) {
    var discounted = [];
    var finalPrice = 0;

    for (var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - discounted);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }


    return discounted;
}

discountPrices([100, 200, 300], 0.5);