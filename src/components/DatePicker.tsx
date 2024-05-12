import React, { useState } from 'react';

const DatePicker: React.FC = () => {
  // State to hold the selected date
  const [date, setDate] = useState<string>('');

  // Function to handle date change
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  return (
    <div className="max-w-xs mx-auto mt-10">
      <label htmlFor="date-picker" className="block text-sm font-medium text-gray-700">
        Select a date:
      </label>
      <input
        type="date"
        id="date-picker"
        value={date}
        onChange={handleDateChange}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="YYYY-MM-DD"
      />
      {date && (
        <div className="mt-2 text-green-500">
          Date selected: {date}
        </div>
      )}
    </div>
  );
};

export default DatePicker;
