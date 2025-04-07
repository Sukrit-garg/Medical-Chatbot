import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 
        disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
