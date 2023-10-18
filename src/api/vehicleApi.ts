import axios from "axios";

const vehicleApi = axios.create({
  baseURL:
    "https://datasource.kapsarc.org/api/explore/v2.1/catalog/datasets/us-vehicle-fuel-economy-data-1984-2017",
});

export const getCompactGasVehicle = async () => {
  const response = await vehicleApi.get(
    "/records?limit=50&refine=year:2023&refine=fueltype1:Regular Gasoline&refine=vclass:Compact Cars&exclude=atvtype:Hybrid&order_by=city08 DESC",
  );
  return response.data;
};

export const getMidsizeGasVehicle = async () => {
  const response = await vehicleApi.get(
    "/records?limit=50&refine=year:2023&refine=fueltype1:Regular Gasoline&refine=vclass:Midsize Cars&exclude=atvtype:Hybrid&order_by=city08 DESC",
  );
  return response.data;
};
export const getSUVGasVehicle = async () => {
  const response = await vehicleApi.get(
    "/records?limit=50&refine=year:2023&refine=fueltype1:Regular Gasoline&refine=vclass:Standard Sport Utility Vehicle 4WD&exclude=atvtype:Hybrid&order_by=city08 DESC",
  );
  return response.data;
};
export const getPickupGasVehicle = async () => {
  const response = await vehicleApi.get(
    "/records?limit=50&refine=year:2023&refine=fueltype1:Regular Gasoline&refine=vclass:Standard Pickup Trucks 4WD&exclude=atvtype:Hybrid&order_by=city08 DESC",
  );
  return response.data;
};
export const getMiniVanGasVehicle = async () => {
  const response = await vehicleApi.get(
    "/records?limit=50&refine=year:2023&refine=fueltype1:Regular Gasoline&refine=vclass:Minivan - 2WD&exclude=atvtype:Hybrid&order_by=city08 DESC",
  );
  return response.data;
};
export const getCompactEVVehicle = async () => {
  const response = await vehicleApi.get(
    "/records?limit=50&refine=year:2023&refine=fueltype1:Electricity&refine=vclass:Compact Cars&order_by=city08 DESC",
  );
  return response.data;
};

export const getMidsizeEVVehicle = async () => {
  const response = await vehicleApi.get(
    "/records?limit=50&refine=year:2023&refine=fueltype1:Electricity&refine=vclass:Midsize Cars&order_by=city08 DESC",
  );
  return response.data;
};
export const getSUVEVVehicle = async () => {
  const response = await vehicleApi.get(
    "/records?limit=50&refine=year:2023&refine=fueltype1:Electricity&refine=vclass:Standard Sport Utility Vehicle 4WD&order_by=city08 DESC",
  );
  return response.data;
};
export const getPickupEVVehicle = async () => {
  const response = await vehicleApi.get(
    "/records?limit=50&refine=year:2023&refine=fueltype1:Electricity&refine=vclass:Standard Pickup Trucks 4WD&order_by=city08 DESC",
  );
  return response.data;
};
export const getMiniVanEVVehicle = async () => {
  const response = await vehicleApi.get(
    "/records?limit=50&refine=year:2023&refine=fueltype1:Electricity&refine=vclass:Minivan - 2WD&order_by=city08 DESC",
  );
  return response.data;
};
export const getCompactHEVVehicle = async () => {
  const response = await vehicleApi.get(
    "/records?limit=50&refine=year:2023&refine=fueltype1:Regular Gasoline&refine=atvtype:Hybrid&refine=vclass:Compact Cars&order_by=city08 DESC",
  );
  return response.data;
};

export const getMidsizeHEVVehicle = async () => {
  const response = await vehicleApi.get(
    "/records?limit=50&refine=year:2023&refine=fueltype1:Regular Gasoline&refine=atvtype:Hybrid&refine=vclass:Midsize Cars&order_by=city08 DESC",
  );
  return response.data;
};
export const getSUVHEVVehicle = async () => {
  const response = await vehicleApi.get(
    "/records?limit=50&refine=year:2023&refine=fueltype1:Regular Gasoline&refine=atvtype:Hybrid&refine=vclass:Standard Sport Utility Vehicle 4WD&order_by=city08 DESC",
  );
  return response.data;
};
export const getPickupHEVVehicle = async () => {
  const response = await vehicleApi.get(
    "/records?limit=50&refine=year:2023&refine=fueltype1:Regular Gasoline&refine=atvtype:Hybrid&refine=vclass:Standard Pickup Trucks 4WD&order_by=city08 DESC",
  );
  return response.data;
};
export const getMiniVanHEVVehicle = async () => {
  const response = await vehicleApi.get(
    "/records?limit=50&refine=year:2023&refine=fueltype1:Regular Gasoline&refine=atvtype:Hybrid&refine=vclass:Minivan - 2WD&order_by=city08 DESC",
  );
  return response.data;
};

export default vehicleApi;
