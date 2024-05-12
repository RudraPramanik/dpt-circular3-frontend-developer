import FilterBar from "./components/FilterBar";
import FlightList from "./components/FlightList";
import FlightOptions from "./components/FlightOptions";
import SwitchButtons from "./components/SwitchButton";
import Container from "./components/UI/Container";


function App() {
  return (
    <>
      <Container>
        <SwitchButtons/>
        <FilterBar />
        <FlightOptions/>
        <FlightList />
      </Container>
    </>
  );
}

export default App;
