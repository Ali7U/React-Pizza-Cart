import React from 'react'
import { FaPizzaSlice } from "react-icons/fa";

function Nav(props) {
  const {countCart} = props
  return (
    <nav>
      <div className="icon">
        <h2>
          Pizzeria <FaPizzaSlice />
        </h2>
      </div>
      <div className="list">
        <ul>
          <li>home</li>
          <li>
            cart
            {countCart ? (
              <button className="badge">{countCart}</button>
            ) : (
              ""
            )}  
          </li>
          <li>about</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav