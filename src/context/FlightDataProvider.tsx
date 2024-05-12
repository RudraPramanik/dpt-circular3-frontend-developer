import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Segment {
  departure: {
    iataCode: string;
    at: string;
  };
  arrival: {
    iataCode: string;
    at: string;
  };
  marketingCarrier: string;
  carrierCode: string;
  flightNumber: string;
  aircraft: string;
}

interface Itinerary {
  segments: Segment[];
  duration: string;
}

interface FlightOffer {
  itineraries: Itinerary[];
  price: string;
  fareBasis: string[][];
  class: string[][];
  seat: string[][];
}

interface FlightDataContextType {
  flights: FlightOffer[];
  fetchData: () => void;
  error: string | null;
}

const FlightDataContext = createContext<FlightDataContextType | undefined>(undefined);

export const useFlightData = () => {
  const context = useContext(FlightDataContext);
  if (context === undefined) {
    throw new Error('useFlightData must be used within a FlightDataProvider');
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const FlightDataProvider: React.FC<Props> = ({ children }) => {
  const [flights, setFlights] = useState<FlightOffer[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = () => {
    fetch('../../data/LHR_CDG_ADT1_TYPE_1.txt')  
      .then(response => response.text())
      .then(text => {
        const data = JSON.parse(text);
        setFlights(data.flightOffer);  
        setError(null);
      })
      .catch(err => {
        console.error('Failed to fetch data:', err);
        setError('Failed to load data');
        setFlights([]);
      });
  };

  return (
    <FlightDataContext.Provider value={{ flights, fetchData, error }}>
      {children}
    </FlightDataContext.Provider>
  );
};
