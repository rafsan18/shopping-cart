// Plus Button Event Handler iPhone 11
const iPhone11AddBtn = document.getElementById("iPhone11AddBtn");
const iPhone11Price = document.getElementById("iPhone11Price").innerText;
const iPhone11PriceNumber = parseFloat(iPhone11Price);
const subTotal = document.getElementById("subTotal").innerText;
const subTotalNumber = parseFloat(subTotal);
iPhone11AddBtn.addEventListener("click", function () {
  //quantity
  const iPhoneQuantity = quantity("iPhone11Quantity") + 1;
  document.getElementById("iPhone11Quantity").value = iPhoneQuantity;

  // increase in total individual price

  const totalIndividualPrice = iPhone11PriceNumber * iPhoneQuantity;
  document.getElementById("iPhone11Price").innerText = totalIndividualPrice;

  // increase in subtotal

  const balanceSubTotal =
    subTotalNumber + iPhone11PriceNumber * iPhoneQuantity - iPhone11PriceNumber;
  document.getElementById("subTotal").innerText = balanceSubTotal;
});

// Minus Button Event Handler iPhone 11
const iPhone11MinusBtn = document.getElementById("iPhone11MinusBtn");
iPhone11MinusBtn.addEventListener("click", function () {
  //quantity
  const iPhoneQuantity = quantity("iPhone11Quantity") - 1;
  document.getElementById("iPhone11Quantity").value = iPhoneQuantity;

  // decrease in total individual price

  const totalIndividualPrice = iPhone11PriceNumber * iPhoneQuantity;
  document.getElementById("iPhone11Price").innerText = totalIndividualPrice;

  // decrease in subtotal
  const balanceSubTotal =
    subTotalNumber + iPhone11PriceNumber * iPhoneQuantity - iPhone11PriceNumber;
  document.getElementById("subTotal").innerText = balanceSubTotal;
});

// Plus Button Event Handler iPhone 11 Case

const iPhone11CaseAddBtn = document.getElementById("iPhone11CaseAddBtn");
const iPhone11CasePrice = document.getElementById("iPhone11CasePrice")
  .innerText;
const iPhone11CasePriceNumber = parseFloat(iPhone11CasePrice);
iPhone11CaseAddBtn.addEventListener("click", function () {
  //quantity
  const iPhoneCaseQuantity = quantity("iPhone11CaseQuantity") + 1;
  document.getElementById("iPhone11CaseQuantity").value = iPhoneCaseQuantity;

  // Increase in total individual price
  const totalIndividualPrice = iPhone11CasePriceNumber * iPhoneCaseQuantity;
  document.getElementById("iPhone11CasePrice").innerText = totalIndividualPrice;

  // increase in subtotal
});

// Minus Button Event Handler iPhone 11 Case

const iPhone11CaseMinusBtn = document.getElementById("iPhone11CaseMinusBtn");
iPhone11CaseMinusBtn.addEventListener("click", function () {
  //quantity
  const iPhoneCaseQuantity = quantity("iPhone11CaseQuantity") - 1;
  document.getElementById("iPhone11CaseQuantity").value = iPhoneCaseQuantity;

  // decrease in total individual price
  const totalIndividualPrice = iPhone11CasePriceNumber * iPhoneCaseQuantity;
  document.getElementById("iPhone11CasePrice").innerText = totalIndividualPrice;
});

// function
function quantity(id) {
  const quantity = document.getElementById(id).value;
  const quantityNumber = parseInt(quantity);
  return quantityNumber;
}
