import React, { useState } from 'react';

const SwitchButtons: React.FC = () => {
    // State to hold the index of the currently selected button
    const [selected, setSelected] = useState<number>(1); // Start with the second button selected

    // Array to hold labels for buttons
    const buttons = ['Button 1', 'Button 2', 'Button 3'];

    // Function to handle button click
    const handleButtonClick = (index: number) => {
        setSelected(index); // Set the selected index to the index of the clicked button
    };

    return (
        <div className="flex space-x-2">
            {buttons.map((button, index) => (
                <button
                    key={index}
                    onClick={() => handleButtonClick(index)}
                    className={`px-4 py-2 rounded-full text-white font-medium ${
                        selected === index ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                >
                    {button}
                </button>
            ))}
        </div>
    );
};

export default SwitchButtons;
