function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;
  if (totalPrice > customerCredits) {
    return console.log(`"Insufficient funds!"`);
  } else {
    return console.log(
      `"You ordered ${quantity} droids worth ${totalPrice} credits!"`
    );
  }
}

makeTransaction(5, 3000, 23000);
makeTransaction(3, 1000, 15000);
makeTransaction(10, 5000, 8000);
makeTransaction(8, 2000, 10000);
makeTransaction(10, 500, 5000);
