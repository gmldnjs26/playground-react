import { Fragment } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/Notification/Notification";

function App() {
  const isShowCart = useSelector((state) => state.ui.cartIsVisible);

  const notification = useSelector((state) => state.ui.notification);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isShowCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
