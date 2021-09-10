import React, { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const cartVisibilityHandler = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <CartProvider>
      <Header onShowCart={cartVisibilityHandler} />
      {showCart && <Cart onCloseCart={cartVisibilityHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
