import React from "react";

function Products(props) {
  const { product, onAdd } = props;
  return (
    <div className="proPizza">
      <img className="small" src={product.image } alt={product.pizzaName} />
      <h3>{product.pizzaName}</h3>
      <p>{product.des}</p>
      <div>${product.price}</div>
      <div>
        <button onClick={()=> onAdd(product)}>Order Now</button>
      </div>
    </div>
  );
}

export default Products;
