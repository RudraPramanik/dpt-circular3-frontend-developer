import React from 'react';


const Segment = ({ segment, flightClass, fareBasis, duration, id , price}) => {
    console.log(segment)
    return (
      <div className='flex flex-row space-x-4' >
        <p>{segment.carrierCode}{segment.aircraft}</p>
        <p>{segment.flightNumber}</p>
        <p>{flightClass}</p>
        <p>{fareBasis}</p>
        <p>{segment.departure.iataCode}-{segment.arrival.iataCode}</p>

        <p> {segment.departure.at}</p>
        <p> {segment.arrival.at}</p>
        <p className="">{id===0? duration : (<span>{""}</span>)}</p>
        <p>{price}</p>

      </div>
    );
  };
export default Segment;
