import { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteItem, updateItemQuantity } from "../../redux/slices/cart";
import "./index.css";

const CartItem = ({ key, name, quantity }) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState();

  return (
    <div key={key} className="cart-row">
      <span>{name}</span>
      <div>
        <input
          type="number"
          defaultValue={quantity}
          onChange={(e) => {
            const quantity = parseInt(e.currentTarget.value);
            if (quantity < 0) {
              setErrorMessage("Please input a positive number!");
              return;
            }
            if (isNaN(quantity)) {
              setErrorMessage("Please use digit only!");
              return;
            }
            setErrorMessage("");
            dispatch(
              updateItemQuantity({
                name,
                quantity: e.currentTarget.value,
              })
            );
          }}
        />
        <br />
        <span className="error-message">{errorMessage}</span>
      </div>
      <div>
        <button onClick={() => dispatch(deleteItem({ name }))}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
