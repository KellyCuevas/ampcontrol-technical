import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Button,
} from "@mui/material";
import { useOptions } from "./context/OptionsProvider";

const Form = () => {
  const { options, setOptions } = useOptions();

  const handleChange = (e: any) => {
    e.preventDefault();
    const { value, name } = e.target;
    if (name === "vSize") {
      setOptions((prev) => {
        return { ...prev, [name]: value, didSubmit: false };
      });
    } else if (name === "miles" && value < 1) {
      alert("Please enter a milage greater than 0");
    } else {
      setOptions((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOptions((prev) => {
      return { ...prev, didSubmit: true };
    });
  };
  // console.log(options);
  return (
    <>
      <form className="options-form">
        <TextField
          id="standard-number"
          variant="standard"
          label="Miles"
          type="number"
          name="miles"
          value={options.miles}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div>
          <InputLabel id="Vehicle-Size">Vehicle Size</InputLabel>
          <Select
            sx={{ minWidth: 120 }}
            labelId="Vehicle-Size"
            id="vehicle-size"
            name="vSize"
            label="Vehicle Size"
            value={options.vSize}
            onChange={handleChange}
          >
            <MenuItem value={"Compact Cars"}>Compact Car</MenuItem>
            <MenuItem value={"Midsize Cars"}>Midsize Car</MenuItem>
            <MenuItem value={"Standard Sport Utility Vehicle 4WD"}>
              SUV
            </MenuItem>

            <MenuItem value={"Standard Pickup Trucks 4WD"}>
              Pickup Truck
            </MenuItem>
            <MenuItem value={"Minivan - 2WD"}>Minivan</MenuItem>
          </Select>
        </div>

        <div>
          <FormLabel id="driving-environment">Driving Environment</FormLabel>
          <RadioGroup
            defaultValue="city"
            aria-labelledby="driving-environment"
            name="dEnv"
            onChange={handleChange}
          >
            <FormControlLabel value="city08" control={<Radio />} label="City" />
            <FormControlLabel
              value="highway08"
              control={<Radio />}
              label="Highway"
            />
          </RadioGroup>
        </div>
      </form>
      <Button
        sx={{ display: "flex", justifySelf: "center", margin: "auto" }}
        variant="contained"
        type="button"
        onClick={handleSubmit}
      >
        Calculate
      </Button>
    </>
  );
};

export default Form;
