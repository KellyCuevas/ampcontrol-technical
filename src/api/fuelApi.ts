import axios from "axios";

const fuelApi = axios.create({
  // baseURL: "https://www.fueleconomy.gov",
  // baseURL: "/fuelApi",
});

export const getFuelPrices = async () => {
  const response = await axios.get(
    "https://www.fueleconomy.gov/ws/rest/fuelprices",
    {
      withCredentials: false,
      headers: { Accept: "application/json" },
    },
  );
  return response.data;
};
