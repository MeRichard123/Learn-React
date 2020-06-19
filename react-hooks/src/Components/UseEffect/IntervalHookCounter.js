import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  // It is perfectly alright to use multiple effects in one component with multiple effect hooks
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
    // when using a counter you can add a dependency array with the count value
    // Or add prevCount in the tick function
  });

  return (
    <div>
      <h2>Hook timer: {count}</h2>
    </div>
  );
}

export default IntervalHookCounter;
