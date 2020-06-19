import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

// Using contextType you can only use it in class components
// and you can only subscribe to a single context type.

export class ComponentE extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        Component E Context: {this.context}
        <ComponentF />
      </div>
    );
  }
}

// line 6 is an alternative to:
// ComponentE.contextType = UserContext;

export default ComponentE;
