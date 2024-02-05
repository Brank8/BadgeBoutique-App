import React from "react";
import "./MyCart.css";
import PropTypes from "prop-types";
import { MdOutlineAddShoppingCart } from "react-icons/md";

function MyCart({ cartItems, onNavigate, onEditItem, onDeleteItem }) {
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
          <div className="cartContainer" >
          {cartItems.map((item, index) => (
            <div  className="cartItems" key={index}>
              <div className="insideText">
              <p>Color: {item.color}</p>
              <p>Rhinestone: {item.rhinestone}</p>
              <p>Charm:{" "} {item.charm}</p>
              </div>
              <div className="editDeleteButtons">
              {/* <button onClick={() => onEditItem(item)}>Edit</button> */}
            <button onClick={() => onDeleteItem(index)}>Delete</button>
              </div>
            </div>
          ))}
          </div>
          {/* </ul> */}
          <div className="bottomButtons">
          <button onClick={() => onNavigate("bedazzle")}>Add More Items</button>
          <button>Checkout</button>
        </div>
        </div>
      )}
    </div>
  );
}

MyCart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onNavigate: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

export default MyCart;
