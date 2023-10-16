import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import EvStationIcon from "@mui/icons-material/EvStation";
import { BarChart } from "@mui/x-charts";
import Form from "./Form";

function App() {
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
      <Form />
    </>
  );
}

export default App;
