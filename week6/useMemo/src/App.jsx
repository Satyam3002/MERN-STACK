import React, { useState,useMemo , useEffect} from "react";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  // const [Esum, setSum] = useState(0);

  // let sum = 0;
  // for (let i = 1; i <= inputValue; i++) {
  //   sum = sum + i;
  // }

  let sum = useMemo(() => {
    let finalsum = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalsum += i;
    }
    return finalsum;
  }, [inputValue])

  // useEffect(() => {
  //   let finalSum = 0;
  //   for (let i = 1; i <= parseInt(inputValue); i++) {
  //     finalSum += i;
  //   }
  //   setSum(finalSum);
  // }, [inputValue]);


  return (
    <div>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder={"Find sum from 1 to n"}
      ></input>
      <br />
      Sum from 1 to {inputValue} is {sum}
      <br />

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter ({count})
      </button>
    </div>
  );
}

export default App;
