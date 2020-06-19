// Hooks allow you to use react features from class components without using a class component

// React version 16.8

// Backwards compatible

// Can't use inside a class component

import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* Onclick Takes in a function so you need a function to call the Hook */}
      <button onClick={() => setCount(count + 1)}>Hook Count: {count}</button>
    </div>
  );
}

export default HookCounter;

//? Hook Rules

// 1)Only Call Hooks at the top level not in loops conditions or nested functions
// 2)Call them within React Functional Components not just any regular JS function
