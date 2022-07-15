import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meals";

function App() {
  const [isShowCart, setIsShowCart] = useState(false);

  const showCartHandler = () => {
    setIsShowCart(true);
  };
  const hideCartHandler = () => {
    setIsShowCart(false);
  };
  return (
    <Fragment>
      <Header onShowCart={showCartHandler} />
      <main>
        <Meal />
      </main>
      {isShowCart && <Cart onCloseCart={hideCartHandler} />}
    </Fragment>
  );
}

export default App;
