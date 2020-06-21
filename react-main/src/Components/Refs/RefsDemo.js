import React, { Component } from "react";
import FocusInput from "./FocusInput";
import FRParentInput from "./FRParentInput";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    // Step one make a ref
    this.inputRef = React.createRef();
    // //? Approach two callback refs
    // this.cbRef = null;
    // this.setCbRef = (element) => {
    //   this.cbRef = element;
    // };
  }

  componentDidMount() {
    // When the dom loads focus on the input
    this.inputRef.current.focus();
    console.log("Input Ref:", this.inputRef);

    //? callback refs pass null by default so check if its not null
    //? if (this.cbRef) {
    //? this.cbRef.focus();
    //? }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div className="refs">
        <h1>Refs can be used to auto focus this input field</h1>
        <p>Refs are used to interact with DOM nodes</p>
        {/* Step two add the reference to the JSX  */}
        <input type="text" className="ref-input" ref={this.inputRef} />
        {/* //? old method part three */}
        {/* <input type="text" className="ref-input" ref={this.setCbRef} /> */}
        <button className="btn btn-primary" onClick={this.clickHandler}>
          Click
        </button>

        <FocusInput />
        <FRParentInput />
      </div>
    );
  }
}

export default RefsDemo;
