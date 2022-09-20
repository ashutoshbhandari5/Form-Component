export const createCoutriesPopulation = (population) => {
  const graphArray = population.map((el) => {
    const value =
      Math.abs(Number(parseInt(el.population, 10))) >= 1.0e9
        ? (Math.abs(Number(parseInt(el.population, 10))) / 1.0e9).toFixed(2) +
          "B"
        : // Six Zeroes for Millions
        Math.abs(Number(parseInt(el.population, 10))) >= 1.0e6
        ? (Math.abs(Number(parseInt(el.population, 10))) / 1.0e6).toFixed(2) +
          "M"
        : // Three Zeroes for Thousands
        Math.abs(Number(parseInt(el.population, 10))) >= 1.0e3
        ? (Math.abs(Number(parseInt(el.population, 10))) / 1.0e3).toFixed(2) +
          "K"
        : Math.abs(Number(parseInt(el.population, 10)));

    return { ...el, value: value };
  });

  return graphArray;
};
