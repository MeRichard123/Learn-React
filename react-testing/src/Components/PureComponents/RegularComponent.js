import React, { Component } from "react";

class RegularComponent extends Component {
  render() {
    console.log("Regular Component Render");
    return <h3>Regular Component --> State Value: {this.props.name}</h3>;
  }
}

export default RegularComponent;
