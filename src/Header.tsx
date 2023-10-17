import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import EvStationIcon from "@mui/icons-material/EvStation";

const Header = () => {
  return (
    <div>
      <h1>Trip Compare</h1>
      <div className="centered">
        <EvStationIcon sx={{ fontSize: "2rem", color: "#475841" }} />
        <p className="subtext">Estimate the fuel cost for your next trip</p>
        <LocalGasStationIcon sx={{ fontSize: "2rem", color: "#475841" }} />
      </div>
    </div>
  );
};

export default Header;
