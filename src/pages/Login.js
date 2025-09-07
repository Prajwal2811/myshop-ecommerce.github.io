import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim()) {
      dispatch(login({ name, email: `${name}@test.com` }));
      navigate('/');
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '400px' }}>
      <h3>Login</h3>
      <input type="text" className="form-control mb-2" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
      <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
    </div>
  );
};
export default Login;
