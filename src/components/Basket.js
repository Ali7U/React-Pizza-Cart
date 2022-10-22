import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function Basket(props) {
  const { cart, onAdd, onRemove } = props;

  const itemPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  const taxPrice = itemPrice * 0.15;
  const totalPrice = itemPrice + taxPrice;

  return (
    <div className="cart">
      <h2>Cart</h2>
      <hr />
      <div>{cart.length === 0 && <div>cart is empty</div>}</div>

      {cart.map((item) => (
        <div className="row" key={item.id}>
          <div className="col-2">{item.pizzaName}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">
              <AiOutlinePlus />
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              <AiOutlineMinus />
            </button>
          </div>
          <div>
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cart.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Item price</div>
            <div className="col-1 text-right">{itemPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">tax price</div>
            <div className="col-1 text-right">{taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">total price</div>
            <div className="col-1 text-right">{totalPrice.toFixed(2)}</div>
          </div>
          <hr />
          <div className="row">
            <button className="check" onClick={() => alert("request is done")}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Basket;
