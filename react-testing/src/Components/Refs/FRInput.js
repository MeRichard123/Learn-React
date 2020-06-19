// We con forward Refs to a child component
// By recieving it as a second parameter
import React from "react";

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FRInput;
