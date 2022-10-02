import React from "react";
import { Route } from "react-router-dom";
import { ProductsContextsProvider } from "./context/products-context";

import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";

const App = (props) => {
  return (
    <ProductsContextsProvider>
      <Navigation />
      <main>
        <Route path="/" component={ProductsPage} exact />
        <Route path="/favorites" component={FavoritesPage} />
      </main>
    </ProductsContextsProvider>
  );
};

export default App;
