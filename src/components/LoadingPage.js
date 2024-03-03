import React from 'react';
import logo from './img/Kolehigo.png';

const LoadingPage = () => {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #1D1A39, #662549)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src={logo} alt="Logo" className="my-5" />
    </div>
  );
};

export default LoadingPage;