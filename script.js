// Plus Button Event Handler iPhone 11
const iPhone11AddBtn = document.getElementById("iPhone11AddBtn");
iPhone11AddBtn.addEventListener("click", function () {
  //quantity
  document.getElementById("iPhone11Quantity").value =
    quantity("iPhone11Quantity") + 1;

  // increase in total individual price
});

// Minus Button Event Handler iPhone 11
const iPhone11MinusBtn = document.getElementById("iPhone11MinusBtn");
iPhone11MinusBtn.addEventListener("click", function () {
  //quantity
  document.getElementById("iPhone11Quantity").value =
    quantity("iPhone11Quantity") - 1;

  // decrease in total individual price
});

// Plus Button Event Handler iPhone 11 Case

const iPhone11CaseAddBtn = document.getElementById("iPhone11CaseAddBtn");
iPhone11CaseAddBtn.addEventListener("click", function () {
  //quantity
  document.getElementById("iPhone11CaseQuantity").value =
    quantity("iPhone11CaseQuantity") + 1;

  // Increase in total individual price
});

// Minus Button Event Handler iPhone 11

const iPhone11CaseMinusBtn = document.getElementById("iPhone11CaseMinusBtn");
iPhone11CaseMinusBtn.addEventListener("click", function () {
  //quantity
  document.getElementById("iPhone11CaseQuantity").value =
    quantity("iPhone11CaseQuantity") - 1;

  // decrease in total individual price
});

// function
function quantity(id) {
  const quantity = document.getElementById(id).value;
  const quantityNumber = parseInt(quantity);
  return quantityNumber;
}
