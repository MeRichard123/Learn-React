import React from "react";

function Errors({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("Not a Hero");
  }
  return <div>{heroName}</div>;
}

// In development mode the error is still displayed however if you click the X you should see the UI

export default Errors;
