import React from 'react';

const Card = ({ className, children }) => (
  <div
    className={`p-12 rounded-lg border border-solid border-gray-200 ${className} relative overflow-hidden`}
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.08)'
    }}
  >
    {children}
    <div className="absolute inset-x-0 bottom-0 w-full h-2" style={{ backgroundColor: '#166EFF' }}></div>
  </div>
);

export default Card;
