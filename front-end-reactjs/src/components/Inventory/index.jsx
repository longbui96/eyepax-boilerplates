import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cart";

import "./index.css";

const Inventory = () => {
  const { items } = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  return (
    <div className="inventory">
      <h2>Inventory</h2>
      <div className="inventory-header">
        <span>Name</span>
        <span>Unit Price</span>
        <span>Quantity</span>
        <span>Actions</span>
      </div>
      {items.map((item, index) => (
        <div key={`inventory-row-${index}`} className="inventory-row">
          <span>{item.name}</span>
          <span>{item.unitPrice}</span>
          <span>{item.quantity}</span>
          <div>
            <button
              onClick={() => {
                dispatch(addToCart(item));
              }}
            >
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Inventory;
