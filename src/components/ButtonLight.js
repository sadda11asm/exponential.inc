import React from 'react';

const sizes = {
  sm: `py-2 px-4`,
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-32 text-lg rounded-lg`
};

const ButtonLight = ({ children, className = '', size }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-white
        hover:bg-primary-darker
        rounded-lg
        text-mainblue
        font-semibold
    `}
    >
      {children}
    </button>
  );
};

export default ButtonLight;
