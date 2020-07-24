// Plus Button Event Handler iPhone 11
const iPhone11AddBtn = document.getElementById("iPhone11AddBtn");
iPhone11AddBtn.addEventListener("click", function () {
  const inputQuantity = document.getElementById("iPhone11Quantity").value;
  const inputQuantityNumber = parseInt(inputQuantity);
  document.getElementById("iPhone11Quantity").value = inputQuantityNumber + 1;
});
