import React, { useState, useEffect, useRef } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      Hook Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Hook Timer
      </button>
    </div>
  );
}

export default HookTimer;
/*
Doing this
 <button onClick={() => clearInterval(interval)}>Clear Hook Timer</button>
Will produce an error as you can't access the interval from Outside the Effect Hook

The use Ref can create a generic container to store a mutable value 

 */
