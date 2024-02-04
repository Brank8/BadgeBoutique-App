import React from 'react';
import './MyCart.css';
import PropTypes from "prop-types";

function MyCart({ cartItems }) {
  return (
    <div>
      <h1 className='here'>MyCart page</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              Color: {item.color}, Rhinestone: {item.rhinestone}, Charm: {item.charm}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

MyCart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default MyCart;