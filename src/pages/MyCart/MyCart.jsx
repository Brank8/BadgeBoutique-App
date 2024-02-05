import React from "react";
import "./MyCart.css";
import PropTypes from "prop-types";
import { MdOutlineAddShoppingCart } from "react-icons/md";

function MyCart({ cartItems, onNavigate }) {
  return (
    <div className="myCart">
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <div className="cartTextIconContainer">
            <p className="noItemsText">No items in cart yet.</p>
            <MdOutlineAddShoppingCart className="cartIcon" />
          </div>
          <button onClick={() => onNavigate("bedazzle")}>
            Start Shopping Now
          </button>
        </div>
      ) : (
        <div>
          {/* <ul> */}
          {cartItems.map((item, index) => (
            <div key={index}>
              Color: {item.color}, Rhinestone: {item.rhinestone}, Charm:{" "}
              {item.charm}
            </div>
          ))}
          {/* </ul> */}
        </div>
      )}
    </div>
  );
}

MyCart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default MyCart;
