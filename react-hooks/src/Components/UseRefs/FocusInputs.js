import React, { useEffect, useRef } from "react";

// Want to focus here on page load

function FocusInputs() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" name="" id="" />
    </div>
  );
}

export default FocusInputs;
