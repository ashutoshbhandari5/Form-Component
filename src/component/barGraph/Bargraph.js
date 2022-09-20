import React, { useEffect, useState } from "react";
import population from "../../utils/population.json";
import Chart from "../common/chart/Chart";
import { createCoutriesPopulation } from "../../utils/helper";
import Bar from "../common/bar/Bar";

const Bargraph = () => {
  const [countriesPopulation, setCountriesPopulation] = useState([]);

  const calculateHighestPopulation = (data) =>
    data.reduce((acc, cur) => {
      const { value } = cur;
      return value > acc ? value : acc;
    }, 0);

  const [highestPopulation, sethighestPopulation] = useState();

  useEffect(() => {
    const countriesPopulcation = createCoutriesPopulation(population);

    setCountriesPopulation(createCoutriesPopulation(countriesPopulcation));
    sethighestPopulation(calculateHighestPopulation(countriesPopulcation));
  }, [setCountriesPopulation, sethighestPopulation]);

  const maxPopulation = 400;
  const chartHeight = maxPopulation + 20;
  const barWidth = 100;
  const barMargin = 30;
  const numberofBars = countriesPopulation?.length;
  let width = numberofBars * (barWidth + barMargin);

  return (
    <div className="bar-graph">
      <p className="legend">
        <span className="population">population</span>
        <span className="highest-population">highest population</span>
      </p>

      <Chart height={chartHeight} width={width}>
        {countriesPopulation?.map((country, index) => {
          const barHeight = country.value;

          return (
            <Bar
              key={index}
              x={index * (barWidth + barMargin)}
              y={chartHeight - barHeight}
              width={barWidth}
              height={barHeight}
              countryName={country.name}
              heightPopulation={highestPopulation}
            />
          );
        })}
      </Chart>
    </div>
  );
};

export default Bargraph;
