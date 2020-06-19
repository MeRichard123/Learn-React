import React, { Component } from "react";

class User extends Component {
  render() {
    return <div>{this.props.render(false)}</div>;
  }
}
// The term render prop refers a technique for sharing code between components using a prop whose value is a function

export default User;
