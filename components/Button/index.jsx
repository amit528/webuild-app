import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button.css";

function Button(props) {
  const { children, className } = props;

  useEffect(() => {
    loadTimelineData(i141875366600TimelineData);
  }, []);

  return (
    <div className={`i1418753-66600 component component-wrapper not-ready ${className || ""}`}>
      <div className="master-button-7gfdlT">
        <div className="button-i141875366-NpK7Ul valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const i141875366600TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".i1418753-66600",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button;
