import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  const targetButton = <button>Hover Me</button>;
  const tooltipText = 'This is a tooltip example.';
  const tooltipStyle = { backgroundColor: 'lightgray' };
  const tooltipImage = 'your-image-url.jpg'; // Optional

  return (
    <div className="app-container">
      <Tooltip
        target={targetButton}
        position="top"
        style={tooltipStyle}
        text={tooltipText}
        image={tooltipImage}
      />
    </div>
  );
};

export default App;
