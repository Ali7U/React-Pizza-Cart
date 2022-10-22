import React, { useState } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import data from "./data";

function App() {
  const { products } = data;
  const [cart, setCart] = useState([]);

  const onAdd = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <>
        <Nav countCart={cart.length} />
        <Header />
        <Main products={products} onAdd={onAdd} onRemove={onRemove} />
        <div className="row-2">
          <Basket onAdd={onAdd} onRemove={onRemove} cart={cart} />
        </div>
      </>
    </div>
  );
}

export default App;
