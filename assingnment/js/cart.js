let cartItems = [];

export function addToCart(product, quantity) {
  const cartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: quantity,
  };
  cartItems.push(cartItem);
}

export function getCartItems() {
  return cartItems;
}

export function clearCart() {
  cartItems = [];
}
