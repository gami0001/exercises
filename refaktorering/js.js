let rabatPremium = 0.2;

function calcPrice(price, isPremium) {
  if (isPremium) {
    return price - price * rabatPremium;
  }
  return price;
}

let finalPrice = calcPrice(800, false);
console.log(finalPrice);
