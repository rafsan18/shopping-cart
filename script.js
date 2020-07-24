// Plus Button Event Handler iPhone 11
const iPhone11AddBtn = document.getElementById("iPhone11AddBtn");
iPhone11AddBtn.addEventListener("click", function () {
  //quantity
  document.getElementById("iPhone11Quantity").value =
    quantity("iPhone11Quantity") + 1;
});

// Minus Button Event Handler iPhone 11
const iPhone11MinusBtn = document.getElementById("iPhone11minusBtn");
iPhone11MinusBtn.addEventListener("click", function () {
  //quantity
  document.getElementById("iPhone11Quantity").value =
    quantity("iPhone11Quantity") - 1;
});

// Plus Button Event Handler iPhone 11 Case
// Minus Button Event Handler iPhone 11

// function
function quantity(id) {
  const quantity = document.getElementById(id).value;
  const quantityNumber = parseInt(quantity);
  return quantityNumber;
}
