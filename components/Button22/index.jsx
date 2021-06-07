import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button22.css";

function Button22(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x1414230TimelineData);
  }, []);

  return (
    <div className="x1414230 component component-wrapper not-ready">
      <div className="master-button-kturDx">
        <div className="button-i141423051-xzFrvd valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x1414230TimelineData = [
  {
    initial_state_name: "Property-1=Tertiary",
    root_element: ".x1414230",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button22;
