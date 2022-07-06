import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ item }) => {
  const { mutateItemsQuantity, removeItem } = useContext(CartContext);
  const changeQuantity = (item, incOrDec) => {
    mutateItemsQuantity(item, incOrDec);
  };
  const removeItemHandler = (removeId) => {
    removeItem(removeId);
  };
  const { name, quantity, imageUrl, price, id } = item;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={changeQuantity.bind(this, item, false)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={changeQuantity.bind(this, item, true)}>&#10095;</div>
      </div>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={removeItemHandler.bind(this, id)}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
