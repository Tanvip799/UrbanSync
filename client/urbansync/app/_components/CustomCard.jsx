import React from 'react';

const CustomCard = ({ children, py, ...props }) => {
  return (
    <div
      style={{
        padding: py || '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff', // Adjust as needed
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default CustomCard;
