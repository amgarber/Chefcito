import React from 'react';
import '../css/SegmentedControls.css';

const SegmentedControl = ({ options, selected, onChange }) => {
    return (
        <div className="segmented-control">
            {options.map((option) => (
                <button
                    key={option}
                    className={`segment ${selected === option ? 'active' : ''}`}
                    onClick={() => onChange(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default SegmentedControl;
