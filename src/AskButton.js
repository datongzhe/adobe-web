import React from 'react';
import './AskButton.css'; // Make sure to create a corresponding CSS file for styling

const AskButton = ({ onAsk, text }) => {


  return (
    <div className="ask-button-container">
      <button onClick={onAsk} className="ask-button">
        {text}
      </button>
    </div>
  );
};

export default AskButton;
