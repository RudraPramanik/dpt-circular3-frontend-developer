import FilterBar from "./components/FilterBar";
import FlightList from "./components/FlightList";
import FlightOptions from "./components/FlightOptions";
import SwitchButtons from "./components/SwitchButton";
import Container from "./components/UI/Container";
import Navbar from "./components/UI/Navbar";


function App() {
  return (
    <>
    <Navbar/>
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
