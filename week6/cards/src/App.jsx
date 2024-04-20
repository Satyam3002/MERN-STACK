import React from "react";

function App() {
  return (
    <div>
      <CardWrapper>
        <TextComponent />  
      </CardWrapper>

      <CardWrapper>
        <div>
          hello there
        </div>    
      </CardWrapper>
    </div>
  );
}

function CardWrapper({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: 20 }}>
      {children}
    </div>
  );
} 

function TextComponent() {
  return (
    <div>
      hi from TextComponent
    </div>
  );
}

export default App;
