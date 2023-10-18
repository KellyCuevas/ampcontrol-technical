import { GavelOutlined } from "@mui/icons-material";

export const calculateGasCost = (
  vehicleEfficiency: number,
  pricePerGallon: number,
  totalMiles: number,
) => {
  // console.log(vehicleEfficiency, pricePerGallon, totalMiles);
  const gallonPerOneMile = 1 / vehicleEfficiency;
  const costPerMile = pricePerGallon * gallonPerOneMile;
  const totalGasCost = costPerMile * totalMiles;
  console.log(totalGasCost);
  return Number(totalGasCost.toFixed(2));
};

// console.log(calculateGasCost(23, 3.5, 46));
