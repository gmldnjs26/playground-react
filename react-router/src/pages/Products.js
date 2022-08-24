import { Link } from "react-router-dom";

const Product = () => (
  <div>
    <h1>Product</h1>
    <ul>
      <li>
        <Link to="/products/book111">A Book</Link>
      </li>
      <li>
        <Link to="/products/carpet222">A Carpet</Link>
      </li>
      <li>
        <Link to="/products/video333">A Video</Link>
      </li>
    </ul>
  </div>
);

export default Product;
