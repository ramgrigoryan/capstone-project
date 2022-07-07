import "./category-preview.styles.scss";
import Product from "../product/product.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((prod, idx) => idx < 4)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;