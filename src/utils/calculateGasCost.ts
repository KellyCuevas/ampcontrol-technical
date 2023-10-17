export const calculateGasCost = (
  vehicleEfficiency: number,
  pricePerGallon: number,
  totalMiles: number,
) => {
  const gallonPerOneMile = 1 / vehicleEfficiency;
  const costPerMile = pricePerGallon * gallonPerOneMile;
  const totalGasCost = costPerMile * totalMiles;
  return totalGasCost;
};

// console.log(calculateGasCost(23, 3.5, 46));
