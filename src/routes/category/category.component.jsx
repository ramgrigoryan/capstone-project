import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import Product from "../../components/product/product.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(
    () => setProducts(categoriesMap[category]),
    [category, categoriesMap]
  );
  console.log(products);
  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};
export default Category;
