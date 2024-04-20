import React, { useState } from "react"


function App() {
  
    const[Title,setTitle] = useState("my name is satyam");
    function updateTitle() {
        setTitle("my name is " + Math.random());
    }

  return (
    <React.Fragment>
    <button onClick={updateTitle}>Update the title</button>
      <Headers title="satyaaaam3"></Headers>
      <Headers title="satyam3"></Headers>
      <Headers title="satyam4"></Headers>
      <Headers title="satyam5"></Headers>
      <Headers title="satyam6"></Headers>
    </React.Fragment>
  )

  //or we can use <>.. </>
}


const Headers = React.memo(function Headers({title}) {
    return <div>
        {title}
    </div>
})
export default App