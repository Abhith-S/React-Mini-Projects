import React from "react";

const Button = ({ icon, text = "click me", onClick, styles }) => {
  return (
    <button onClick={onClick} style={styles}>
      {icon} {text}
    </button>
  );
};

export default Button;
