import React, { Component } from "react";

/*
Fragments let you group a list of children withou adding extra nodes to the DOM
*/

export class Fragments extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Fragment Demo</h1>
        <p>This describes the Fragment Demo Component</p>
      </React.Fragment>
    );
  }
}

export default Fragments;
