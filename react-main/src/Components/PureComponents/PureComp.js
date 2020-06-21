import React, { PureComponent } from "react";

export class PureComp extends PureComponent {
  render() {
    console.log("Pure component render");
    return (
      <h3 className="pure-comp">
        Pure Component --> State Value: {this.props.name}
      </h3>
    );
  }
}

export default PureComp;
