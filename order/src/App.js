import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meals";
import { CartContextProvider } from "./store/cart-context";

function App() {
  const [isShowCart, setIsShowCart] = useState(false);

  const showCartHandler = () => {
    setIsShowCart(true);
  };
  const hideCartHandler = () => {
    setIsShowCart(false);
  };
  return (
    <CartContextProvider>
      <Header onShowCart={showCartHandler} />
      <main>
        <Meal />
      </main>
      {isShowCart && <Cart onCloseCart={hideCartHandler} />}
    </CartContextProvider>
  );
}

export default App;
