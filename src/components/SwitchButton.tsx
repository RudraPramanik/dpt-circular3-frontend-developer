import React, { useState } from 'react';

const SwitchButtons: React.FC = () => {
    // State to hold the index of the currently selected button
    const [selected, setSelected] = useState<number>(1); // Start with the second button selected

    // Array to hold labels for buttons
    const buttons = ['Round Trip', 'One Way', 'Multy city'];

    // Function to handle button click
    const handleButtonClick = (index: number) => {
        setSelected(index); // Set the selected index to the index of the clicked button
    };

    return (
        <div className="flex justify-center items-center my-6 ">
            {buttons.map((button, index) => (
                <button
                    key={index}
                    onClick={() => handleButtonClick(index)}
                    className={`px-4 py-2 border-2 border-indigo-900 text-black font-medium ${
                        selected === index ? 'bg-indigo-900 text-white ' : ' text-black'
                    }`}
                >
                    {button}
                </button>
            ))}
        </div>
    );
};

export default SwitchButtons;
