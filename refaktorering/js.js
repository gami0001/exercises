let discountPremium = 0.2;

function calcPrice(price, isPremium) {
  if (isPremium) {
    return price - price * discountPremium;
  }
  return price;
}

let finalPrice = calcPrice(800, false);
console.log(finalPrice);
