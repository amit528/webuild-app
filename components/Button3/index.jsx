import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button3.css";

function Button3(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x1418825TimelineData);
  }, []);

  return (
    <div className="x1418825 component component-wrapper not-ready">
      <div className="master-button-llxbSz">
        <div className="button-i141882551-IVC9Lx valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x1418825TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x1418825",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
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
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
    },
  },
];

export default Button3;
