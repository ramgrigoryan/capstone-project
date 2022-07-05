import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className={`cart-dropdown-container`}>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
