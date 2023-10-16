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
// import { SelectChangeEvent } from "@mui/material/Select";
import React, { useState } from "react";

const Form = () => {
  const [options, setOptions] = useState({
    miles: 0,
    vehicleSize: "",
    environment: "",
  });

  const handleChange = (e) => {
    e.preventDefault;
    const { value, name } = e.target;
    setOptions((prev) => {
      return { ...prev, [name]: value };
    });
  };

  console.log(options);
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
            name="vehicleSize"
            label="Vehicle Size"
            value={options.vehicleSize}
            onChange={handleChange}
          >
            <MenuItem value={27}>Sedan/Wagon</MenuItem>
            <MenuItem value={29}>SUV</MenuItem>
            <MenuItem value={9}>Van</MenuItem>
            <MenuItem value={25}>Pickup</MenuItem>
            <MenuItem value={3}>Passenger Van/Shuttle Bus</MenuItem>
          </Select>
        </div>

        <div>
          <FormLabel id="driving-environment">Driving Environment</FormLabel>
          <RadioGroup
            defaultValue="city"
            aria-labelledby="driving-environment"
            name="environment"
            onChange={handleChange}
          >
            <FormControlLabel value="city" control={<Radio />} label="City" />
            <FormControlLabel
              value="highway"
              control={<Radio />}
              label="Highway"
            />
          </RadioGroup>
        </div>
      </form>
      <Button
        sx={{ display: "flex", justifySelf: "center", margin: "auto" }}
        variant="contained"
      >
        Calculate
      </Button>
    </>
  );
};

export default Form;
