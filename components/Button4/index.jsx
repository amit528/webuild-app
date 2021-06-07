import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button4.css";

function Button4(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x1413986TimelineData);
  }, []);

  return (
    <div className="x1413986 animate-enter2 component component-wrapper not-ready">
      <div className="master-button-QY8Sjp">
        <div className="button-i141398651-sSbXdF valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x1413986TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x1413986",
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

export default Button4;
