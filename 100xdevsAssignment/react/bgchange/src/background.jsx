import React from "react";
import { useState } from "react";
import './bgchange.css';

function Backgroundcolor() {
    const [bgcolor,setbgcolor] = useState('white');

    const changeBackground = (color) => {
        setbgcolor(color);
    }

    return (
        <div className="background-changer" style={{ backgroundColor: bgcolor, height: '100vh', padding: '20px' }}>
            <h1>Background Changer</h1>
            <button onClick={() => changeBackground('red')}>Red</button>
            <button onClick={() => changeBackground('blue')}>Blue</button>
            <button onClick={() => changeBackground('green')}>Green</button>
            <button onClick={() => changeBackground('yellow')}>Yellow</button>
            <button onClick={() => changeBackground('pink')}>Pink</button>
        </div>
    );
}

export default Backgroundcolor;