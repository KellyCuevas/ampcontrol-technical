import Header from "./Header";
import Form from "./Form";
import BarChartCompare from "./BarChartCompare";
import { OptionsProvider } from "./context/OptionsProvider";

function App() {
  return (
    <>
      <Header />
      <OptionsProvider>
        <BarChartCompare />
        <Form />
      </OptionsProvider>
    </>
  );
}

export default App;
