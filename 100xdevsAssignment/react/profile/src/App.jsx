import React from 'react';
import Profile from './Profile';


import './Profile.css';


function App() {
    return (
        <div className="App">
            <Profile
                name="John Doe"
                age={30}
                bio="Enthusiastic developer and coffee lover."
               
            />
        </div>
    );
}

export default App;
