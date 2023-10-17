import axios from "axios";

const vehicleApi = axios.create({
  // baseURL: "https://www.fueleconomy.gov",
  // baseURL: "/fuelApi",
});

export const getFuelPrices = async () => {
  const response = await axios.get("/fuelApi", {
    withCredentials: false,
    headers: { Accept: "application/json" },
  });
  return response.data;
};

export const getVehicleId = async (
  year: number,
  make: string,
  model: string,
) => {
  const response = await axios.get(
    "/vehicleIdApi",
    // `/ws/rest/vehicle/menu/options?year=${year}&make=${make}&model=${model}`,
    {
      withCredentials: false,
      headers: {
        Accept: "application/json",
      },
      params: {
        year: year,
        make: make,
        model: model,
      },
    },
  );
  return response.data;
};

export const getVehicleData = async (id: number) => {
  const response = await axios.get(`vehicleDetailApi/${id}`, {
    headers: { Accept: "application/json" },
  });
  return response.data;
};
export default vehicleApi;
