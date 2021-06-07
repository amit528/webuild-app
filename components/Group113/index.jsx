import React from "react";
import Group69 from "../Group69";
import Button from "../Button";
import "./Group113.css";

function Group113(props) {
  const { basic, group, group69Props, buttonProps } = props;

  return (
    <div className="group-113">
      <div className="basic-i1418752665 valign-text-middle typographyheadlineh4-extrabold-24">{basic}</div>
      <div className="luxury">
        <div className="group-6" style={{ backgroundImage: `url(${group})` }}></div>
      </div>
      <Group69 number={group69Props.number} text4={group69Props.text4} className="group-69-1" />
      <Button className="i1418752-66600">{buttonProps.children}</Button>
    </div>
  );
}

export default Group113;
