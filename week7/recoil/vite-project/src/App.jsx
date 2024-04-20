import { useState } from "react";
import { useRecoilValue, useRecoilState, RecoilRoot , useSetRecoilState} from "recoil";

import {countAtom} from "./store/atoms/count";
import { evenSelector } from "./store/atoms/count";
import { CountContext } from "./context";

function App() {
  

  return (
    <div>
      <RecoilRoot>
      <Count /> 
      </RecoilRoot>
      </div>
  );
}

function Count({}) {
  console.log("re-render");
  return (
    <div>
      <CountRenderer />      
      <Buttons />
      <EvenCountRenderer/>
    </div>
  );
}

function CountRenderer({}) {
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
    {count}  
    </b>
    </div>;
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? "it is even" : null}
  </div>
}

function Buttons({}) {
  const setCount = useSetRecoilState(countAtom);
  console.log("button re-rendered")
  return (
    <div>
      <button onClick={() => setCount( count => count + 1)}>Increase</button>
      <button onClick={() => setCount(count => count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
