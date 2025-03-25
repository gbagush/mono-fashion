let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCartToLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const addProductToCart = (id, color, size, quantity) => {
  if (!id || !color || !size || quantity <= 0) {
    return false;
  }

  const existingItem = cart.find(
    (item) => item.id === id && item.color === color && item.size === size
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id, color, size, quantity });
  }

  saveCartToLocalStorage();

  return true;
};

const updateCartItem = (id, color, size, newQuantity) => {
  const itemIndex = cart.findIndex(
    (item) =>
      item.id === id.toString() && item.color === color && item.size === size
  );

  if (itemIndex !== -1) {
    if (newQuantity <= 0) {
      cart.splice(itemIndex, 1);
    } else {
      cart[itemIndex].quantity = newQuantity;
    }
  }

  saveCartToLocalStorage();
};

const deleteCartItem = (id, color, size) => {
  cart = cart.filter(
    (item) =>
      !(item.id === id.toString() && item.color === color && item.size === size)
  );

  saveCartToLocalStorage();
};

const getCartProducts = () => {
  return cart;
};

const getCartItemCount = () => {
  return cart.reduce((total) => total + 1, 0);
};

export {
  addProductToCart,
  updateCartItem,
  deleteCartItem,
  getCartProducts,
  getCartItemCount,
};
