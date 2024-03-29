import React from 'react';
import './Sprite.css'; 

const Sprite = ({ imageSrc, text }) => {
  return (
    <div className="sprite-container">
      <img src={imageSrc} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default Sprite;