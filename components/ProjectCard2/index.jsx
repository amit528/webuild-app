import React from "react";
import Group99 from "../Group99";
import "./ProjectCard2.css";

function ProjectCard2(props) {
  const { rectangle62, group99Props, className } = props;

  return (
    <div className={`project-card-3 ${className || ""}`}>
      <img className="rectangle-62" src={rectangle62} />
      <Group99 text1={group99Props.text1} surname={group99Props.surname} />
    </div>
  );
}

export default ProjectCard2;
