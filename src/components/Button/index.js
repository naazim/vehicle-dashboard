import React from "react";
import clsx from "clsx";

const Button = props => {
  const { type, className, disabled, onClick } = props;

  return (
    <button
      type={type}
      className={clsx("btn", className)}
      disabled={disabled}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {};

Button.defaultProps = {
  type: "button"
};

export default Button;
