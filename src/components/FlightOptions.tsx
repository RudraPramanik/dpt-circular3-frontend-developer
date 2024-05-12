import FetchButton from './SearchButton';
import Checkbox from './ControlledComponents/Checkbox';
import { useState } from 'react';
import RadioButton from './ControlledComponents/RadioButtons';
import Text from './UI/Text';


const FlightOptions = () => {
  const optionsRadio = [
    { label: 'DUMMY', value: 'Dummy' },
    { label: 'PDT', value: 'PDT' },
  ];
  const [isCheckboxChecked, setCheckboxChecked] = useState<boolean>(false);

  const [selectedOption, setSelectedOption] = useState<string>(optionsRadio[0].value);

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const toggleCheckbox = (checked: boolean) => {
      setCheckboxChecked(checked);
  };


  return (
    <div className='flex flex-row justify-between border-b border-indigo-200 py-4 '>
      <Checkbox checked={isCheckboxChecked} onChange={toggleCheckbox} label="Extra Options " />
        <div className="flex flex-row items-center justify-start space-x-4">
          <Text variant='headingXs' className='text-gray-600' fontWeight='semibold' >Environment</Text>
      {optionsRadio.map((option, index) => (
        <RadioButton
          key={index}
          label={option.label}
          value={option.value}
          checked={selectedOption === option.value}
          onChange={handleOptionChange}
        />
      ))}
    </div>
        <FetchButton/>
    </div>
  )
}

export default FlightOptions