import React from "react";
import Products from "./Products";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Main(props) {
  const { products, onAdd, onRemove } = props;

  return (
    <main>
      <h2>The Best Pizza</h2>
      <div className="products">
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Products>
        ))}
      </div>
    </main>
  );
}

export default Main;
