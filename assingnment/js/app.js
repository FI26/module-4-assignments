import products from "./product.js";
import { addToCart, getCartItems, clearCart } from "./cart.js";

function displayCartItems() {
  const cartContainer = document.getElementById("shopping-cart");
  cartContainer.innerHTML = "";

  let totalAmount = 0;

  if (getCartItems().length === 0) {
    cartContainer.innerHTML = "<p>No items in the cart.</p>";
    return;
  }

  getCartItems().forEach((item) => {
    const itemTotal = item.price * item.quantity;
    totalAmount += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <h4>${item.name}</h4>
      <p>Price: $${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
      <p>Total: $${itemTotal}</p>
    `;
    cartContainer.appendChild(cartItem);
  });

  const totalAmountElement = document.createElement("p");
  totalAmountElement.textContent = `Total Amount: $${totalAmount}`;
  cartContainer.appendChild(totalAmountElement);
}

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.dataset.productId);
      const product = products.find((p) => p.id === productId);
      const quantity = 1; // You can change this to handle variable quantities

      addToCart(product, quantity);
      displayCartItems();
    });
  });

  const clearCartButton = document.getElementById("clear-cart");

  clearCartButton.addEventListener("click", () => {
    clearCart();
    displayCartItems();
  });

  displayCartItems();
});
