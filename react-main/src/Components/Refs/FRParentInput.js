import React, { Component } from "react";
import FRInput from "./FRInput";

//make a ref in the parent element
class FRParentInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        {/* Here we forward a ref as a prop */}
        <FRInput ref={this.inputRef} />
        {/* Attach to child component */}
        <button onClick={this.handleClick}>Focus Child Component</button>
      </div>
    );
  }
}

export default FRParentInput;
