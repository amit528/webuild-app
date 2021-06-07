import React from "react";
import Standard from "../Standard";
import Group69 from "../Group69";
import Button from "../Button";
import "./Group1112.css";

function Group1112(props) {
  const { place, standardProps, group69Props, buttonProps } = props;

  return (
    <div className="group-111">
      <div className="basic-i1418750665 valign-text-middle typographyheadlineh4-extrabold-24">{place}</div>
      <Standard overlapGroup={standardProps.overlapGroup} />
      <Group69 number={group69Props.number} text4={group69Props.text4} className="group-69-1" />
      <Button className="i1418750-66600">{buttonProps.children}</Button>
    </div>
  );
}

export default Group1112;
