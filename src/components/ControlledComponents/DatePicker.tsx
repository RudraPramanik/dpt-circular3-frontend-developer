import React, { useState } from 'react';

const DatePicker: React.FC = () => {
  const [date, setDate] = useState<string>('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  return (
    <div className="max-w-xs mx-auto">
    
      <input
        type="date"
        id="date-picker"
        value={date}
        onChange={handleDateChange}
        className="mt-1 block w-full py-2 px-3 text-xs border-2 border-gray-400 shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
        placeholder="YYYY-MM-DD"
      />
    </div>
  );
};

export default DatePicker;
