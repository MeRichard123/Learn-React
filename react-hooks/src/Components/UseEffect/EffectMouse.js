import React, { useEffect, useState } from "react";

//running an effect only once
function EffectMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePos = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Use effect called");
    window.addEventListener("mousemove", logMousePos);

    // This return function runs when a component un mounts
    return () => {
      console.log("Component un mounting code");
      window.removeEventListener("mousemove", logMousePos);
    };

    // Empty array will run it only once
  }, []);

  return (
    <div>
      Hook Coords X - {x}, Y - {y}
    </div>
  );
}

export default EffectMouse;
