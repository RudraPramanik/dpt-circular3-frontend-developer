import React, { useState, ChangeEvent } from 'react';
import Text from '../UI/Text';

interface IOption {
  value: string;
  label: string;
}

const options: IOption[] = [
  { value: "LHR", label: "LHR" },
  { value: "CDG", label: "CDG" },
  { value: "DAC", label: "DAC" }
];

const SelectForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="max-w-xs mx-auto">
      <select
        id="simple-select"
        value={selectedOption}
        onChange={handleChange}
        className="mt-1 block w-full py-2 px-3 border-2 border-gray-400 bg-white rounded-sm shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
      >
        <option value="">
        <Text variant='bodyXs' className='text-gray-500' >{options[0].value}</Text>
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForm;
