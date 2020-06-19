//The Effect hook lets you perform sideeffects in functional components
// A close replacement for ComponentDidMount, componentDidUpdate and componentWillUnmount

import React, { useState, useEffect } from "react";

function EffectComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // Same as componentDidMount and componentDidUpdate
  // Run after every render of the component
  useEffect(() => {
    console.log("Update Doc title With Hooks");
    document.title = `You Clicked ${count} times - Hooks`;
    // add adding an array with count will only run if the count changes
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default EffectComponent;
