import React from "react";
import Son from "./son";

const Papa = () => {
  return (
    <React.Fragment>
      papa <Son />
      {[1, 2, 3, 4].map((n) => (
        <React.Fragment key={n}>{n}</React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default Papa;
