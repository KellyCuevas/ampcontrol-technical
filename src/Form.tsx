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

import { useQueries } from "@tanstack/react-query";
import { getCurrentYear } from "./utils/getCurrentYear";
import { getVehicleData, getVehicleId } from "./api/vehicleApi";

type Options = {
  miles: number;
  vehicleSize: number;
  environment: string;
  type: string;
};

type FormProps = {
  options: Options;
  setOptions: React.Dispatch<React.SetStateAction<Options>>;
};

const Form = ({ options, setOptions }: FormProps) => {
  const year = getCurrentYear();

  const mostPopularGasVehicles = [
    { year, make: "Chevrolet", model: "Malibu", size: "sedan/wagon" },
    { year, make: "Toyota", model: "RAV4", size: "SUV" },
    { year, make: "Chrysler", model: "Pacifica", size: "van" },
    {
      year,
      make: "Ford",
      model: "F-Series",
      size: "pickup",
      mpg_city: 20,
      mpg_highway: 26,
    },
    {
      year,
      make: "Mercedes Benz",
      model: "Sprinter",
      size: "passenger van/shuttle bus",
      mpg: 17,
    },
  ];

  const results = useQueries({
    queries: mostPopularGasVehicles?.map((vehicle) => {
      return {
        queryKey: ["vehicleId", year, vehicle?.make, vehicle?.model],
        queryFn: () => getVehicleId(year, vehicle?.make, vehicle?.model),
      };
    }),
  });

  console.log(results);
  const vehicleDetail = useQueries({
    queries: results?.map((vehicle, i) => {
      return {
        queryKey: [
          mostPopularGasVehicles[i]?.size,
          vehicle?.data?.menuItem?.value,
        ],
        queryFn: () => getVehicleData(vehicle?.data?.menuItem?.value),
        select: (vehicle: {
          city08: number;
          comb08: number;
          highway08: number;
        }) => {
          if (options?.environment === "city")
            return vehicle?.city08 !== 0 ? vehicle?.city08 : vehicle?.comb08;
          else if (options?.environment === "highway")
            return vehicle?.highway08 !== 0
              ? vehicle?.highway08
              : vehicle?.highway08;
        },
      };
    }),
  });
  console.log(vehicleDetail);

  const handleChange = (e: any) => {
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
