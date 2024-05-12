import React, { useState } from 'react';

interface RadioButtonsProps {
  options: string[];
}

const RadioButtons: React.FC<RadioButtonsProps> = ({ options }) => {
  // State to hold the value of the currently selected option
  const [selectedOption, setSelectedOption] = useState<string>(options[1]); // Start with the second option selected

  // Function to handle option change
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col items-start space-y-2">
      {options.map((option, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            type="radio"
            name="options"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
            className="text-blue-600 focus:ring-blue-500"
          />
          <span className={selectedOption === option ? 'text-blue-600' : 'text-gray-600'}>
            {option}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;
