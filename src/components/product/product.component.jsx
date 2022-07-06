import "./product.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const Product = ({ product }) => {
  const { addItemsToCart } = useContext(CartContext);
  const clickHandler = () => {
    addItemsToCart(product);
  };
  console.log(product)
  const { name, price, imageUrl } = product;
  return (
    <div className="product-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={clickHandler}>
        Add to Card
      </Button>
    </div>
  );
};

export default Product;
