import React from "react";

const Bar = ({ x, y, width, height, heightPopulation, countryName }) => {
  console.log(countryName);
  return (
    <>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={heightPopulation === height ? "#ff6361" : "#ffa600"}
      />
      <text
        x={x + width / 5}
        y={y - 25}
        dominant-baseline="middle"
        text-anchor="middle"
      >
        {`${height}`}
      </text>
      <text x={x + width / 20} y={y - 5}>
        {`${countryName}`}
      </text>
    </>
  );
};

export default Bar;
