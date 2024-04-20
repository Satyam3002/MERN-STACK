// import React, { useState } from "react"


// function App() {
  

  
//   return (
//     <React.Fragment>
//      <Headerswithbutton></Headerswithbutton>
//       <Headers title="satyam2"></Headers>
//       <Headers title="satyam3"></Headers>
//       <Headers title="satyam4"></Headers>
//       <Headers title="satyam5"></Headers>
//       <Headers title="satyam6"></Headers>
//     </React.Fragment>
//   )

//   //or we can use <>.. </>
// }

// function Headerswithbutton() {
//   const[Title,setTitle] = useState("my name is satyam");

//   function updateTitle() {
//     setTitle("my name is " + Math.random());
//   }


//   return <div>
//   <button onClick={updateTitle}>Update the title</button>
//   <Headers title={Title}></Headers>
// </div>

// }

// function Headers({title}) {
// return <div>
//   {title}
  
// </div>

// }
// export default App

import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("my name is satyam");

  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

  return (
    <>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title} />
      <Header title="satyaaaam3" />
      <Header title="satyam3" />
      <Header title="satyam4" />
      <Header title="satyam5" />
      <Header title="satyam6" />
    </>
  );
}

const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
  
});

export default App;
