import React from 'react';

function Button({ className, buttonName, submit, onClick, disabled }) {
  return (
    <button
      className={`button ${className}`}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
}

export default Button;
