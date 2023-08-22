import React, { useState } from 'react';
import './Tooltip.css'; // You can create a CSS file for styling

const Tooltip = ({ target, position, style, text, image }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div className="tooltip-container">
      {isVisible && (
        <div
          className={`tooltip tooltip-${position}`}
          style={style}
        >
          {image && <img src={image} alt="Tooltip Image" />}
          <p>{text}</p>
        </div>
      )}
      <div
        className="target"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {target}
      </div>
    </div>
  );
};

export default Tooltip;
