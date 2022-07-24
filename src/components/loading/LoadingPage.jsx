import React from 'react';
import loading from '../../../public/animations/loading.svg';

const LoadingPage = () => (
  <div style={{ width: '100%', height: '100%' }}>
    <img style={{ display: 'block', margin: 'auto' }} src={loading} />
  </div>
);

export default LoadingPage;
