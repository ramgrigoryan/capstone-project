import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { dropdownStatus, setDropdownStatus } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        setDropdownStatus(!dropdownStatus);
      }}
    >
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">
        {cartItems.reduce((total, cur) => (total += cur.quantity), 0)}
      </span>
    </div>
  );
};

export default CartIcon;
