import React from "react";

function MemoComponent({ name }) {
  console.log("====================================");
  console.log("Rendering React Memo Component");
  return <h3 className="pure-comp">MemoComponent -> {name}</h3>;
}
// This is a functional component version of a pure class component

// This is a higher order component

export default React.memo(MemoComponent);
