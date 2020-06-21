// Portals are used to render children onto a DOM node outside the DOM hierarchy

// In react all elements are rendered onto a root element portals alllow you to break out of that

// This is useful when you need to break away from root styles for example for modals

import React from "react";
import ReactDOM from "react-dom";

function Portal() {
  return ReactDOM.createPortal(
    <div className="portals">
      <h1>Portals Demo</h1>
      <h2>
        This component is not part of the default root, inspect to see DOM tree
      </h2>
    </div>,
    document.getElementById("portal-root")
  );
}

export default Portal;
