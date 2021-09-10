import React, { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const cartHandler = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <Fragment>
      <Header onShowCart={cartHandler} />
      {showCart && <Cart onCloseCart={cartHandler} />}
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
