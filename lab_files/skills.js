function calculateNumbers(var1, var2) {
  return var1 + var2;
}

//A function that calculates the price of a vehicle based on gas mileage, year and number of miles driven.
function calculatePrice(mpg, year, miles) {
  var price = 0;
  if (year > 2010) {
    price = 10000;
  } else {
    price = 5000;
  }
  if (mpg > 30) {
    price = price - 1000;
  } else {
    price = price + 1000;
  }
  if (miles > 100000) {
    price = price - 1000;
  } else {
    price = price + 1000;
  }
  return price;
}
