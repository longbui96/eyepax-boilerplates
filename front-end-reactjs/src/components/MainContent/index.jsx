import Inventory from "../Inventory";
import Cart from "../Cart";
import "./index.css";

const MainContent = () => {
  return (
    <div className="main-content">
      <Inventory />
      <Cart />
    </div>
  );
};

export default MainContent;
