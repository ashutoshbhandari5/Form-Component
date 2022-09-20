import React from "react";

const chart = ({ children, height, width }) => {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="70%"
      preserveAspectRatio="xMidYMax meet"
    >
      {children}
    </svg>
  );
};

export default chart;
