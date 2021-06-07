import React from "react";
import "./Frame12.css";

function Frame12(props) {
  const { children, className } = props;

  return (
    <div className={`frame-1 border-1px-white ${className || ""}`}>
      <div className="text-40 typographybodycaption-14-semi-bold">{children}</div>
    </div>
  );
}

export default Frame12;
