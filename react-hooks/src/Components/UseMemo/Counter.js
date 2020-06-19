import React, { useState, useMemo } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  // UseMemo creates a cached value which is used unless something in the
  // dependency array changes
  // useCallback caches the function it self
  // useMemo invokes a function and caches the result
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);
  // When the state updates the slow function here is re-rendered
  // So Both counters suffer

  return (
    <div>
      <div className="">
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div className="">
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default Counter;
