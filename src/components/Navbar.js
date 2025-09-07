import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { FaShoppingCart, FaHeart, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.length);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 shadow-sm">
      <Link className="navbar-brand fw-bold" to="/">
        🛍 MyShop
      </Link>

      {/* Mobile Toggler */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-lg-center gap-2">
          {/* Cart */}
          <li className="nav-item">
            <NavLink className="nav-link d-flex align-items-center" to="/cart">
              <FaShoppingCart className="me-1" />
              Cart
              {cartCount > 0 && (
                <span className="badge bg-danger ms-1">{cartCount}</span>
              )}
            </NavLink>
          </li>

          {/* Wishlist */}
          <li className="nav-item">
            <NavLink className="nav-link d-flex align-items-center" to="/wishlist">
              <FaHeart className="me-1" />
              Wishlist
            </NavLink>
          </li>

          {/* User Section */}
          <li className="nav-item dropdown">
            {user ? (
              <>
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#!"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <FaUserCircle className="me-1" />
                  {user.name}
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={() => dispatch(logout())}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </>
            ) : (
              <Link className="btn btn-outline-light btn-sm" to="/login">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
