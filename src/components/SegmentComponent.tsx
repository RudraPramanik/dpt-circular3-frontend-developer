import React from 'react';
import Text from './UI/Text';



interface SegmentDetails {
    carrierCode: string;
    flightNumber: string;
    aircraft: string;
    departure: {
        iataCode: string;
        at: string; 
    };
    arrival: {
        iataCode: string;
        at: string; 
    };
}

interface SegmentProps {
    segment: SegmentDetails;
    flightClass: string;
    fareBasis: string;
    duration: string;
    id: number;
    price: string;
    index: number; 
}
const Segment: React.FC<SegmentProps> = ({
    segment,
    flightClass,
    fareBasis,
    duration,
    id,
    price,
}) => {
        return (
        <div className={``} >
        <div className='grid grid-cols-7 ' >
            <div className=' col-span-3 ' >
                <div className='grid grid-cols-2' >
                    <div className=' col-span-1 grid grid-cols-3 ' >
                        <div className=' col-span-1 ' >
                            <Text variant='bodyXs' className="text-gray-500"  >
                            {segment.carrierCode}{segment.flightNumber}

                            </Text>
                        </div>
                        <div className=' col-span-1 ' >
                        <Text variant='bodyXs' className="text-gray-500"  >
                        {segment.aircraft}

                        </Text>

                            </div>
                        <div className=' col-span-1 ' > 
                        <Text variant='bodyXs' className="text-gray-500"  >
                        {flightClass}

                        </Text>

                        </div>

                    </div>
                    <div className=' col-span-1 grid grid-cols-2 ' >
                        <div className=' col-span-1 ' >
                        <Text variant='bodyXs' className="text-gray-500"  >
                        {fareBasis}

                        </Text>

                            </div>
                        <div className=' col-span-1 ' >
                        <Text variant='bodyXs' className="text-gray-500"  >
                        {segment.departure.iataCode}-{segment.arrival.iataCode}

                        </Text>

                            </div>

                    </div>
                </div>
            </div>
            <div className=' col-span-4 grid grid-cols-7 ' >
                <div className='col-span-4 grid grid-cols-2 ' >
                    <div className=' col-span-1 whitespace-nowrap ' >
                    <Text variant='bodyXs' className="text-gray-500"  >
                    {segment.departure.at}

                    </Text>

                        </div>
                    <div className=' col-span-1 ' >
                    <Text variant='bodyXs' className="text-gray-500"  >
                    {segment.arrival.at}

                    </Text>
                        </div>
                </div>
                <div className=' col-span-3 grid grid-cols-3  ' >
                    <div className='col-span-1 text-gray-600 ' >--</div>
                    <div className='col-span-1' >
                    <Text variant='bodyXs' className="text-gray-500"  >
                    {id === 0 ? duration : ""}

                    </Text>
                        </div>
                       <div className='col-span-1' > {id===0? (<Text variant='bodyXs' className="text-gray-500">{price}</Text>)  : id===2? "" : (<button className=' bg-indigo-900 text-white px-3 py-2 rounded-md  '  >
                        <Text variant='bodyXs' className='text-gray-100'  >SELECT</Text>
                    </button>)}</div>
                </div>
            </div>
        </div>
        </div>
    );
  };
export default Segment;
