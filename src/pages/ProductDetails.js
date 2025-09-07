import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="container mt-4">Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}/>
        </div>
        <div className="col-md-6">
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <h5>${product.price}</h5>
          <button className="btn btn-primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
