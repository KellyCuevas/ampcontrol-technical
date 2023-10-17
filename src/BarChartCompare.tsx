import { BarChart } from "@mui/x-charts";
import { useOptions } from "./context/OptionsProvider";
import { getCurrentYear } from "./utils/getCurrentYear";
import { useQuery } from "@tanstack/react-query";
import { getFuelPrices } from "./api/fuelApi";
import useVehicleData from "./hooks/useVehicleData";
import useCalculateCosts from "./hooks/useCalculateCosts";

const BarChartCompare = () => {
  const { options } = useOptions();
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

  const {
    gasData,
    isGasDataSuccess,
    eVData,
    isEVDataSuccess,
    hEVData,
    isHEVDataSuccess,
  } = useVehicleData();

  const { eVCost, hEVCost, gasCost } = useCalculateCosts(
    eVData,
    hEVData,
    gasData,
    fuelPrices,
  );

  console.log(eVCost, hEVCost, gasCost);
  const chartData = [eVCost, hEVCost, gasCost];
  return (
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
              // "Plugin Hybrid Electric",
              "Conventional Gasoline",
            ],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [chartData[0], chartData[1], chartData[2]],
            color: "#9FB8AD",
          },
        ]}
        width={700}
        height={300}
      />
    </div>
  );
};

export default BarChartCompare;
