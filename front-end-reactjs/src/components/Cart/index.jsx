import { useSelector } from "react-redux";

import CartItem from "../CartItem";

import "./index.css";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const cartItems = Object.entries(items);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-header">
        <span>Name</span>
        <span>Quantity</span>
        <span>Actions</span>
      </div>
      {cartItems.map(([name, details]) => (
        <CartItem
          key={`cart-item-${name}`}
          name={name}
          quantity={details.quantity}
        />
      ))}
      <hr />
      For dev only
      <pre>{JSON.stringify(cartItems, null, 2)}</pre>
    </div>
  );
};

export default Cart;
