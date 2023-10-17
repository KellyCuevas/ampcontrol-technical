import { BarChart } from "@mui/x-charts";
import { useOptions } from "./context/OptionsProvider";
import { getCurrentYear } from "./utils/getCurrentYear";
import { useQuery } from "@tanstack/react-query";
import getFuelPrices from "./api/vehicleApi";

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

  if (isSuccess) console.log(fuelPrices, year);
  if (isError) console.log(error);

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
  );
};

export default BarChartCompare;
