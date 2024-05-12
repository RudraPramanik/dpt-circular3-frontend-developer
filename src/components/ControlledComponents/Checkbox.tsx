import React from 'react';
import Text from '../UI/Text';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;  
  label: string
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);  
    };

    return (
        <div className="flex items-center space-x-2">
            <input
                type="checkbox"
                id="exampleCheckbox"
                checked={checked}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="exampleCheckbox" className="text-sm text-gray-700">
                <Text variant='bodySm' className='text-gray-600' >{label}</Text>
            </label>
        </div>
    );
};

export default Checkbox;
