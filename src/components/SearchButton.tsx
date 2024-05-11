import React from 'react';
import { useFlightData } from '../context/FlightDataProvider';

const FetchButton = () => {
  const { fetchData } = useFlightData();

  return (
    <button onClick={fetchData}>Search</button>
  );
};

export default FetchButton;
