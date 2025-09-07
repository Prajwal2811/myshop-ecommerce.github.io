import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">🛒 Your Shopping Cart</h3>

      {cart.length === 0 ? (
        <div className="text-center p-5 border rounded bg-light">
          <h5>Your cart is empty</h5>
          <Link to="/" className="btn btn-primary mt-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="row">
          {/* Cart Items */}
          <div className="col-md-8">
            {cart.map((item) => (
              <div
                className="card mb-3 shadow-sm"
                key={item.id}
              >
                <div className="row g-0 align-items-center">
                  {/* Image */}
                  <div className="col-md-3 text-center">
                    <img
                      src={item.image || "https://via.placeholder.com/100"}
                      alt={item.title}
                      className="img-fluid rounded p-2"
                      style={{ maxHeight: "120px", objectFit: "contain" }}
                    />
                  </div>

                  {/* Info */}
                  <div className="col-md-6">
                    <div className="card-body">
                      <h6 className="card-title">
                        {item.title.substring(0, 50)}
                      </h6>
                      <p className="card-text text-muted mb-1">
                        Price: <strong>${item.price}</strong>
                      </p>

                      {/* Quantity Controls */}
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => dispatch(decreaseQty(item.id))}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => dispatch(increaseQty(item.id))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove */}
                  <div className="col-md-3 text-center">
                    <button
                      className="btn btn-sm btn-danger mt-2"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="col-md-4">
            <div className="card shadow-sm sticky-top" style={{ top: "90px" }}>
              <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                <p className="d-flex justify-content-between">
                  <span>Total Items:</span>
                  <span>{cart.length}</span>
                </p>
                <p className="d-flex justify-content-between">
                  <span>Total Price:</span>
                  <strong>${total.toFixed(2)}</strong>
                </p>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(clearCart())}
                  >
                    Clear Cart
                  </button>
                  <Link to="/checkout" className="btn btn-success">
                    Proceed to Checkout
                  </Link>
                  <Link to="/" className="btn btn-outline-primary">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
