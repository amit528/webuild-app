import React from "react";
import Group69 from "../Group69";
import Button from "../Button";
import "./PackageCard.css";

function PackageCard(props) {
  const { basic, group69Props, buttonProps } = props;

  return (
    <div className="package-card">
      <div className="text-30 valign-text-middle typographyheadlineh4-extrabold-24">{basic}</div>
      <div className="basic">
        <img
          className="vector-28"
          src="https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-87@2x.png"
        />
      </div>
      <Group69 number={group69Props.number} text4={group69Props.text4} />
      <Button>{buttonProps.children}</Button>
    </div>
  );
}

export default PackageCard;
