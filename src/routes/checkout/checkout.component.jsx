import "./checkout.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const countTotal = (itemList) => {
    return itemList.reduce((total, current) => {
      return (total += current.quantity * current.price);
    }, 0);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Delete</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem item={item} key={item.id} />
      ))}
      <span className="total">${countTotal(cartItems)}</span>
    </div>
  );
};

export default Checkout;
