import { useFlightData } from "../context/FlightDataProvider";
import Segment from "./SegmentComponent";

const FlightList = () => {
  const { flights, error } = useFlightData();
  console.log(flights);

  return (
    <div>
    <h1>Flight Offers</h1>
    {/*  */}
    <table className="min-w-full leading-normal">
            <thead>
                <tr className="bg-gray-800 text-white">
                    <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                        Flight
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                        Aircraft
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                        Class
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                        Fare
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                        Route
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                        Departure
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                        Arrival
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                        Duration
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                        Price
                    </th>
                </tr>
            </thead>
        </table>
    {/*  */}
    {error && <div>Error loading flights: {error}</div>}
    {flights.length > 0 ? (
      flights.map((offer, index) => (
        <div key={index}>
          <h2>Price: {offer.price}</h2>
          {offer.itineraries.map((itinerary, iIdx) => (
            <div key={iIdx}>
              <h3>Duration: {itinerary.duration}</h3>
              {itinerary.segments.map((segment, sIdx) => (
                <Segment 
                  key={sIdx} 
                  segment={segment} 
                  flightClass={offer.class[iIdx][sIdx]} // Assuming class data is structured similarly to segment data
                  fareBasis={offer.fareBasis[iIdx][sIdx]}
                  duration={itinerary.duration}
                  id={sIdx}
                  price={offer.price}

                />
              ))}
              <div>hello</div>
            </div>
          ))}
        </div>
      ))
    ) : (
      <p>No flight data available.</p>
    )}
  </div>
  );
};

export default FlightList;


{/* <Segment
flightID={`${offer.itineraries[0].segments[0].carrierCode} ${offer.itineraries[0].segments[0].aircraft}`}
flightNumber={offer.itineraries[0].segments[0].flightNumber}
flightClass={offer.class[0][0]}
fare={offer.fareBasis[0][0]}
route={`${offer.itineraries[0].segments[0].arrival.iataCode}-${offer.itineraries[0].segments[0].departure.iataCode}`}
departure={offer.itineraries[0].segments[0].departure.at}
arrival={offer.itineraries[0].segments[0].arrival.at}
duration={offer.itineraries[0].duration}
flightID2={`${offer.itineraries[0].segments[0].carrierCode} ${offer.itineraries[0].segments[0].aircraft}`}
flightNumber2={offer.itineraries[0].segments[0].flightNumber}
flightClass2={offer.class[0][0]}
fare2={offer.fareBasis[0][0]}
route2={`${offer.itineraries[0].segments[0].arrival.iataCode}-${offer.itineraries[0].segments[0].departure.iataCode}`}
departure2={offer.itineraries[0].segments[0].departure.at}
arrival2={offer.itineraries[0].segments[0].arrival.at}
/> */}