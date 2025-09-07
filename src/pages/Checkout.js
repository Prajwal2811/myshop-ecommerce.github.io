import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleCheckout = () => {
    setOrderPlaced(true);
    dispatch(clearCart());
  };

  if (orderPlaced) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-success p-4 rounded shadow-sm">
          <h4>🎉 Order placed successfully!</h4>
          <p>Thank you for shopping with us. Your order is on the way!</p>
          <Link to="/" className="btn btn-primary mt-3">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">Checkout</h3>

      {cart.length === 0 ? (
        <div className="text-center p-5 border rounded bg-light">
          <h5>No items to checkout</h5>
          <Link to="/" className="btn btn-outline-primary mt-3">
            Go to Shop
          </Link>
        </div>
      ) : (
        <div className="row">
          {/* Order Items */}
          <div className="col-md-8">
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-light">
                <h5 className="mb-0">Order Items</h5>
              </div>
              <ul className="list-group list-group-flush">
                {cart.map((item) => (
                  <li
                    className="list-group-item d-flex align-items-center"
                    key={item.id}
                  >
                    <img
                      src={item.image || "https://via.placeholder.com/60"}
                      alt={item.title}
                      className="rounded me-3"
                      style={{ width: "60px", height: "60px", objectFit: "contain" }}
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{item.title.substring(0, 50)}</h6>
                      <small className="text-muted">
                        {item.quantity} × ${item.price}
                      </small>
                    </div>
                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Summary Section */}
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
                <div className="d-grid">
                  <button
                    className="btn btn-success btn-lg"
                    onClick={handleCheckout}
                  >
                    Place Order
                  </button>
                  <Link to="/cart" className="btn btn-outline-secondary mt-2">
                    Back to Cart
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

export default Checkout;
