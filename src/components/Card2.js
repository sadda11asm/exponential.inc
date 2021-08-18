import React from 'react';
import Card from './Card';

const Card2 = ({ className, children }) => (
  <div
    className={`p-12 rounded-lg border border-solid border-gray-200 ${className}`}
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.08)'
    }}
  >
    {children}
  </div>
);

export default Card2;
