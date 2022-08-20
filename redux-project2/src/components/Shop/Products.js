import { useState } from "react";
import { useEffect } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const [defaultProducts, setDefaultProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:7070/api/meals");
      const data = await res.json();
      setDefaultProducts((prev) => {
        return [...prev, ...data];
      });
    };
    fetchProducts();
  }, []);

  const productList = defaultProducts.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      title={item.name}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productList}</ul>
    </section>
  );
};

export default Products;
