import React from "react";
import "./Premium.css";

function Premium(props) {
  const { overlapGroup, overlapGroup1, vector2, group, vector3 } = props;

  return (
    <div className="premium">
      <div className="overlap-group1-8" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <div className="flex-row-5">
          <div className="overlap-group3">
            <div className="overlap-group2-1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <img
                className="vector-31"
                src="https://anima-uploads.s3.amazonaws.com/projects/60b70661766950cfeb87eb29/img/vector-82@2x.png"
              />
            </div>
            <img className="vector-30" src={vector2} />
          </div>
          <div className="group-5" style={{ backgroundImage: `url(${group})` }}></div>
        </div>
        <img className="vector-32" src={vector3} />
      </div>
    </div>
  );
}

export default Premium;
