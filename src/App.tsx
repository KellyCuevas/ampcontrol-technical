import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import EvStationIcon from "@mui/icons-material/EvStation";
import { BarChart } from "@mui/x-charts";
import Form from "./Form";
import { useQuery } from "@tanstack/react-query";
import getFuelPrices from "./api/vehicleApi";
import { getCurrentYear } from "./utils/getCurrentYear";
import { useState } from "react";
// import { calculateGasCost } from "./utils/calculateGasCost";
type Options = {
  miles: number;
  vehicleSize: number;
  environment: string;
  type: string;
};
function App() {
  const [options, setOptions] = useState<Options>({
    miles: 0,
    vehicleSize: 27,
    environment: "",
    type: "",
  });
  const year = getCurrentYear();
  const {
    data: fuelPrices,
    isSuccess,
    isError,
    error,
  } = useQuery({
    queryKey: ["fuelPrices", year],
    queryFn: getFuelPrices,
  });

  if (isSuccess) console.log(fuelPrices, year);
  if (isError) console.log(error);
  const vehicleData = [
    {
      year: 2023,
      make: "Chevrolet",
      model: "Malibu",
      size: 27,
      mpg_city: 24,
      mpg_highway: 30,
    },
    {
      year: 2023,
      make: "Toyota",
      model: "RAV4",
      size: 29,
      mpg_city: 22,
      mpg_highway: 25,
    },
    {
      year: 2023,
      make: "Chrysler",
      model: "Pacifica",
      size: 9,
      mpg_city: 18,
      mpg_highway: 19,
    },
    {
      year: 2023,
      make: "Ford",
      model: "F-Series",
      size: 25,
      mpg_city: 20,
      mpg_highway: 26,
    },
    {
      year: 2023,
      make: "Mercedes Benz",
      model: "Sprinter",
      size: 3,
      mpg_city: 17,
      mpg_highway: 20,
    },
  ];
  const selected = vehicleData?.filter(
    (data) => data?.size === options?.vehicleSize,
  );

  return (
    <>
      <div>
        <h1>Trip Compare</h1>
        <div className="centered">
          <EvStationIcon sx={{ fontSize: "2rem", color: "#475841" }} />
          <p className="subtext">Estimate the fuel cost for your next trip</p>
          <LocalGasStationIcon sx={{ fontSize: "2rem", color: "#475841" }} />
        </div>
      </div>
      <div className="centered">
        <BarChart
          yAxis={[
            {
              label: "Estimated Trip Fuel Cost (U.S. Dollars)",
            },
          ]}
          xAxis={[
            {
              id: "barCategories",
              data: [
                "Electric",
                "Hybrid Electric",
                "Plugin Hybrid Electric",
                "Conventional Gasoline",
              ],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [2, 5, 3, 4],
              color: "#9FB8AD",
            },
          ]}
          width={700}
          height={300}
        />
      </div>
      <Form options={options} setOptions={setOptions} />
    </>
  );
}

export default App;
