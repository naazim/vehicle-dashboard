import React from "react";
import clsx from "clsx";

const Button = props => {
  const { type, className, disabled } = props;
  console.log(props);
  return (
    <button type={type} className={clsx("btn", className)} disabled={disabled}>
      {props.children}
    </button>
  );
};

Button.propTypes = {};

export default Button;
