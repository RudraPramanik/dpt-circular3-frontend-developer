import React, { useState, ChangeEvent } from 'react';

// Define the type for individual select options
interface IOption {
  value: string;
  label: string;
}

// Define the options as an array of objects
const options: IOption[] = [
  { value: "option1", label: "LHR" },
  { value: "option2", label: "CDG" },
  { value: "option3", label: "DAC" }
];

const SelectForm: React.FC = () => {
  // State with type definition for the selected option
  const [selectedOption, setSelectedOption] = useState<string>('');

  // Function to handle the selection change with type definition
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="max-w-xs mx-auto mt-10">
      <label htmlFor="simple-select" className="block text-sm font-medium text-gray-700">
        Choose an option:
      </label>
      <select
        id="simple-select"
        value={selectedOption}
        onChange={handleChange}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Select an option</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectedOption && (
        <div className="mt-2 text-green-500">
          You selected: {options.find(option => option.value === selectedOption)?.label}
        </div>
      )}
    </div>
  );
};

export default SelectForm;
