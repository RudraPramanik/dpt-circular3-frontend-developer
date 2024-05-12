import FilterBar from "./components/FilterBar";
import FlightList from "./components/FlightList";
import FetchButton from "./components/SearchButton";
import SelectForm from "./components/SelectForm";
import Container from "./components/UI/Container";

function App() {
  return (
    <>
      <Container>
        <FilterBar />
        <FetchButton />
        <FlightList />
      </Container>
    </>
  );
}

export default App;
