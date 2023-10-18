import { useEffect } from "react";
import { calculateElectricCost } from "../utils/calculateElectricCost";
import { calculateGasCost } from "../utils/calculateGasCost";
import { useOptions } from "../context/OptionsProvider";

const useCalculateCosts = (
  eVData: any,
  hEVData: any,
  gasData: any,
  fuelPrices: any,
) => {
  const { options } = useOptions();

  const cityOrHwy = options?.dEnv;
  let eVCost = 0;
  let gasCost = 0;
  let hEVCost = 0;

  const getGasCost = () => {
    if (gasData && gasData[cityOrHwy] && options?.didSubmit === true) {
      gasCost = calculateGasCost(
        gasData[cityOrHwy],
        fuelPrices?.regular,
        options?.miles,
      );
      // console.log(gasCost);
    }
    return gasCost;
  };

  const getEVCost = () => {
    if (eVData && eVData[cityOrHwy] && options?.didSubmit === true) {
      eVCost = calculateElectricCost(
        eVData[cityOrHwy],
        fuelPrices?.electric,
        options?.miles,
      );
    }
    return eVCost;
  };

  const getHEVCost = () => {
    if (hEVData && hEVData[cityOrHwy] && options?.didSubmit === true) {
      hEVCost = calculateElectricCost(
        hEVData[cityOrHwy],
        fuelPrices?.electric,
        options?.miles,
      );
    }
    return hEVCost;
  };

  return {
    eVCost: getEVCost(),
    hEVCost: getHEVCost(),
    gasCost: getGasCost(),
  };
};

export default useCalculateCosts;
