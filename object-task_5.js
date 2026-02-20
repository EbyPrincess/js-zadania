const groceries = {
  "Orange Juice": { price: 1.5, discount: 10 },
  Chocolate: { price: 2, discount: 0 },
};

function getTotalPriceOfShoppingBag(shoppingBag) {
  const total = shoppingBag.reduce((sum, item) => {
    const info = groceries[item.product];
    if (!info) return sum;

    const priceWithDiscount = info.price * (1 - info.discount / 100);
    return sum + priceWithDiscount * item.quantity;
  }, 0);

  return Number(total.toFixed(2));
}

const shoppingBag = [
  { product: "Chocolate", quantity: 3 },
  { product: "Orange Juice", quantity: 23 },
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice);
