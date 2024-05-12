import React from 'react';
import Text from '../UI/Text';

interface RadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void; 
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="text-blue-600 focus:ring-blue-500"
      />
        <Text variant='headingXs' className='text-gray-600' fontWeight='semibold'  ></Text>
        {label}
    </label>
  );
};

export default RadioButton;
