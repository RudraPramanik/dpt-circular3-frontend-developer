import React, { useState } from 'react';

const TimePicker: React.FC = () => {
    const [time, setTime] = useState<string>('');

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTime(event.target.value); 
    };

    return (
        <div className="max-w-xs mx-auto">
           
            <input
                type="time"
                id="time-picker"
                value={time}
                onChange={handleTimeChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-600 rounded-sm shadow-sm focus:outline-none  sm:text-sm"
                placeholder="any" 
            />
        </div>
    );
};

export default TimePicker;
