import React, { useState } from 'react';

function Paragenerate() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  const generatePara = () => {
    setText(lorem(number));
  };


  const lorem = (num) => {
    const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
    return Array.from({ length: num }, () => paragraph).join(' ');
  };

  return (
    <div className="paragenerate">
      <h2>Para Generator</h2>
      <div className="inputbox">
        <input type="number" value={number} onChange={handleInputChange} />
      </div>
      <div className="Button">
        <button onClick={generatePara}>Generate</button>
      </div>
      {text && <p>{text}</p>}
    </div>
  );
}

export default Paragenerate;
