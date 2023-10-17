export const calculateElectricCost = (
  vehicleEfficiency: number,
  pricePerKilowattHour: number,
  totalMiles: number,
) => {
  //NOTE: MPGe is a measure of how many miles an electric vehicle can go on 33.7kwh of electricity
  const kwhPerOneMile = 33.7 / vehicleEfficiency;
  const costPerMile = pricePerKilowattHour * kwhPerOneMile;
  const totalElectricCost = costPerMile * totalMiles;
  return Number(totalElectricCost.toFixed(2));
};

// console.log(calculateElectricCost(60, 0.14, 60));
