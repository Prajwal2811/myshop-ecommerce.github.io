import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { addToWishlist } from '../features/wishlist/wishlistSlice';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: '200px', objectFit: 'contain' }}/>
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.title.substring(0, 40)}...</h6>
        <p className="card-text">${product.price}</p>
        <div className="mt-auto">
          <button className="btn btn-sm btn-primary mr-2" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          <button className="btn btn-sm btn-outline-secondary mr-2" onClick={() => dispatch(addToWishlist(product))}>❤</button>
          <Link to={`/product/${product.id}`} className="btn btn-sm btn-info">Details</Link>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
