import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const defaultProducts = [
    {
      id: "12",
      title: "Test",
      description: "This is a first product - amazing!",
      price: 120,
    },
    {
      id: "13",
      title: "Test2",
      description: "This is a first product - amazing!",
      price: 200,
    },
    {
      id: "14",
      title: "Test3",
      description: "This is a first product - amazing!",
      price: 300,
    },
  ];

  const productList = defaultProducts.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      title={item.title}
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
