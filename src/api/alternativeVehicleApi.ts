import axios from "axios";

const apiKey = import.meta.env.API_KEY;
const alternativeVehicleApi = axios.create({
  baseURL: "https://developer.nrel.gov",
});

export const getAlternativeVehicles = async (
  categoryId: number,
  fuelId: number,
) => {
  const response = await axios.get(
    `/api/vehicles/v1/light_duty_automobiles.json?api_key=${apiKey}&current=true&category_id=${categoryId}&fuel_id=${fuelId}`,
    {
      headers: { Accept: "application/json" },
    },
  );
  return response.data;
};

export default alternativeVehicleApi;
