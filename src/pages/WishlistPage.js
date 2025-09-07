import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">💖 My Wishlist</h3>

      {wishlist.length === 0 ? (
        <div className="text-center p-5 border rounded bg-light">
          <h5>No items in your wishlist</h5>
          <p className="text-muted">Browse our products and add your favorites!</p>
          <Link to="/" className="btn btn-primary mt-3">
            Go to Shop
          </Link>
        </div>
      ) : (
        <div className="row">
          {wishlist.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={item.image || "https://via.placeholder.com/200"}
                  alt={item.title}
                  className="card-img-top p-3"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{item.title.substring(0, 50)}</h6>
                  <p className="text-muted mb-2">Price: ${item.price}</p>

                  <div className="mt-auto d-flex gap-2">
                    <button
                      className="btn btn-sm btn-success flex-grow-1"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      🛒 Add to Cart
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => dispatch(removeFromWishlist(item.id))}
                    >
                      ❌ Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
