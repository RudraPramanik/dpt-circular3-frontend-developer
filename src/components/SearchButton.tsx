import { useFlightData } from "../context/FlightDataProvider";
import Text from "./UI/Text";

const FetchButton = () => {
  const { fetchData } = useFlightData();

  return (
    <button
      onClick={fetchData}
      className=" bg-indigo-900 text-white px-3 h-8 rounded-md  "
    >
      <Text variant="bodyXs" className="text-gray-100">
        SEARCH
      </Text>
    </button>
  );
};

export default FetchButton;
