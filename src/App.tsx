import Header from "./Header";
import Form from "./Form";
import BarChartCompare from "./BarChartCompare";

function App() {
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

  return (
    <>
      <Header />
      <BarChartCompare />
      <Form />
    </>
  );
}

export default App;
