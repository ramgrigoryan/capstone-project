import "./checkout.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CheckoutRow = ({ item }) => {
  let { imageUrl, name, quantity, price } = item;
  const changeQuantity = (incOrDec) => {
    quantity = incOrDec ? quantity+=1 : quantity-=1;
    console.log(quantity)
  };
  return (
    <tr>
      <td>
        <img src={imageUrl} alt={name} />
      </td>
      <td>{name}</td>
      <td>
        <span onClick={changeQuantity.bind(this,false)}>&lt;</span>
        {quantity}
        <span onClick={changeQuantity.bind(this,true)}>&gt;</span>
      </td>
      <td>{price}</td>
      <td>X</td>
    </tr>
  );
};

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Product</td>
            <td>Description</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <CheckoutRow item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Checkout;
