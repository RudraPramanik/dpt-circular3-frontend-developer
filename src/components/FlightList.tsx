import { useFlightData } from "../context/FlightDataProvider";
import Segment from "./SegmentComponent";
import Container from "./UI/Container";
import Text from "./UI/Text";

const FlightList = () => {
  const { flights, error } = useFlightData();
  console.log(flights);

  return (
    <Container className=" ">
      <h1>Flight Offers</h1>
      <table className="min-w-full leading-normal">
        <thead>
          <tr className="bg-gray-800 text-white">
            {/* <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">Price</th> */}
          </tr>
        </thead>
        <div>
          <div className="grid grid-cols-7 gap-4 bg-gray-200 py-4 px-2 text-gray-700 text-base ">
            <div className=" col-span-3 ">
              <div className="grid grid-cols-2">
                <div className=" col-span-1 grid grid-cols-3 ">
                  <div className=" col-span-1 ">
                 <Text variant="bodySm" className="text-gray-500" fontWeight="medium" >FLIGHT</Text>
                 </div>
                  <div className=" col-span-1 ">
                  <Text variant="bodySm" className="text-gray-500" fontWeight="medium" >AIRCRAFT</Text>

                  </div>
                  <div className=" col-span-1 ">CLASS</div>
                </div>
                <div className=" col-span-1 grid grid-cols-2 ">
                  <div className=" col-span-1 ">
                  <Text variant="bodySm" className="text-gray-500" fontWeight="medium" >FARE</Text>

                  </div>
                  <div className=" col-span-1 ">
                  <Text variant="bodySm" className="text-gray-500" fontWeight="medium" >ROUTE</Text>

                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-4 grid grid-cols-7 ">
              <div className="col-span-4 grid grid-cols-2 ">
                <div className=" col-span-1 ">
                <Text variant="bodySm" className="text-gray-500" fontWeight="medium" >DEPARTURE</Text>

                </div>
                <div className=" col-span-1 ">
                <Text variant="bodySm" className="text-gray-500" fontWeight="medium" >ARRIVAL</Text>

                </div>
              </div>
              <div className=" col-span-3 grid grid-cols-3 gap-4 ">
                <div className="col-span-1"></div>
                <div className="col-span-1">
                <Text variant="bodySm" className="text-gray-500" fontWeight="medium" >DURATION</Text>

                </div>
                <div className="col-span-1">
                <Text variant="bodySm" className="text-gray-500" fontWeight="medium" >PRICE</Text>

                </div>
              </div>
            </div>
          </div>
        </div>

        {flights.length > 0 ? (
          flights.map((offer, index) =>
            offer.itineraries.map((itinerary, iIdx) => (
              <div className={`border-red-300 border-b py-2 px-2 ${index % 2 !== 0 ? 'bg-gray-200': 'bg-gray-50' } `}>
                <div className="border-b border-red-200">
                  {itinerary.segments.map((segment, sIdx) => (
                    <Segment
                      key={sIdx}
                      segment={segment}
                      flightClass={offer.class[iIdx][sIdx]}
                      fareBasis={offer.fareBasis[iIdx][sIdx]}
                      duration={itinerary.duration}
                      id={sIdx}
                      price={offer.price}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ))
          )
        ) : (
          <div>No flight data available.</div>
        )}
        {error && <div> Error loading flights: {error}</div>}
      </table>
    </Container>
  );
};

export default FlightList;

//     <div>
//     <h1>Flight Offers</h1>
//     {/*  */}
//     <table className="min-w-full leading-normal">
//             <thead>
//                 <tr className="bg-gray-800 text-white">
//                     <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
//                         Flight
//                     </th>
//                     <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
//                         Aircraft
//                     </th>
//                     <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
//                         Class
//                     </th>
//                     <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
//                         Fare
//                     </th>
//                     <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
//                         Route
//                     </th>
//                     <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
//                         Departure
//                     </th>
//                     <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
//                         Arrival
//                     </th>
//                     <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
//                         Duration
//                     </th>
//                     <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
//                         Price
//                     </th>
//                 </tr>
//             </thead>
//             <tbody>
//             {error && <div>Error loading flights: {error}</div>}

//             </tbody>
//         </table>
//     {/*  */}
//     {flights.length > 0 ? (
//       flights.map((offer, index) => (
//         <div key={index}>
//           {offer.itineraries.map((itinerary, iIdx) => (
//             <div key={iIdx}>
//               {itinerary.segments.map((segment, sIdx) => (
//                 <Segment
//                   key={sIdx}
//                   segment={segment}
//                   flightClass={offer.class[iIdx][sIdx]} // Assuming class data is structured similarly to segment data
//                   fareBasis={offer.fareBasis[iIdx][sIdx]}
//                   duration={itinerary.duration}
//                   id={sIdx}
//                   price={offer.price}

//                 />
//               ))}
//               <div>hello</div>
//             </div>
//           ))}
//         </div>
//       ))
//     ) : (
//       <p>No flight data available.</p>
//     )}

//         {error && <div>Error loading flights: {error}</div>}

//   </div>
