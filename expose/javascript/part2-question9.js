// Question 9
function discountPrices(prices, discount) {
    const discounted = [];
    const finalPrice = 0;

    for (let i = 0; i < prices.length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    console.log(i);

    return discounted;
}

discountPrices([100, 200, 300], 0.5);