import { useQuery } from "@tanstack/react-query";
import { useOptions } from "../context/OptionsProvider";
import {
  getCompactGasVehicle,
  getMidsizeGasVehicle,
  getMiniVanGasVehicle,
  getPickupGasVehicle,
  getSUVGasVehicle,
  getCompactEVVehicle,
  getMidsizeEVVehicle,
  getMiniVanEVVehicle,
  getPickupEVVehicle,
  getSUVEVVehicle,
  getCompactHEVVehicle,
  getMidsizeHEVVehicle,
  getPickupHEVVehicle,
  getMiniVanHEVVehicle,
  getSUVHEVVehicle,
} from "../api/vehicleApi";

const useVehicleData = () => {
  const { options } = useOptions();

  const { data: gasData, isSuccess: isGasDataSuccess } = useQuery({
    enabled: options.vSize !== "" && options.didSubmit === true,
    queryKey: ["gas", options.vSize],
    queryFn: () => {
      if (options.vSize === "Compact Cars") {
        return getCompactGasVehicle();
      }
      if (options.vSize === "Midsize Cars") {
        return getMidsizeGasVehicle();
      }
      if (options.vSize === "Standard Sport Utility Vehicle 4WD") {
        return getSUVGasVehicle();
      }
      if (options.vSize === "Standard Pickup Trucks 4WD") {
        return getPickupGasVehicle();
      }
      if (options.vSize === "Minivan - 2WD") {
        return getMiniVanGasVehicle();
      }
    },
    select: (data: any) =>
      data?.results ? data?.results[data?.results?.length - 1] : null,
  });
  const { data: eVData, isSuccess: isEVDataSuccess } = useQuery({
    enabled: options.vSize !== "" && options.didSubmit === true,
    queryKey: ["ev", options.vSize],
    queryFn: () => {
      if (options.vSize === "Compact Cars") {
        return getCompactEVVehicle();
      }
      if (options.vSize === "Midsize Cars") {
        return getMidsizeEVVehicle();
      }
      if (options.vSize === "Standard Sport Utility Vehicle 4WD") {
        return getSUVEVVehicle();
      }
      if (options.vSize === "Standard Pickup Trucks 4WD") {
        return getPickupEVVehicle();
      }
      if (options.vSize === "Minivan - 2WD") {
        return getMiniVanEVVehicle();
      }
    },
    select: (data: any) => (data?.results ? data?.results[0] : null),
  });
  const { data: hEVData, isSuccess: isHEVDataSuccess } = useQuery({
    enabled: options.vSize !== "" && options.didSubmit === true,
    queryKey: ["hev", options.vSize],
    queryFn: () => {
      if (options.vSize === "Compact Cars") {
        return getCompactHEVVehicle();
      }
      if (options.vSize === "Midsize Cars") {
        return getMidsizeHEVVehicle();
      }
      if (options.vSize === "Standard Sport Utility Vehicle 4WD") {
        return getSUVHEVVehicle();
      }
      if (options.vSize === "Standard Pickup Trucks 4WD") {
        return getPickupHEVVehicle();
      }
      if (options.vSize === "Minivan - 2WD") {
        return getMiniVanHEVVehicle();
      }
    },
    select: (data: any) => (data?.results ? data?.results[0] : null),
  });

  return {
    gasData,
    isGasDataSuccess,
    eVData,
    isEVDataSuccess,
    hEVData,
    isHEVDataSuccess,
  };
};

export default useVehicleData;
