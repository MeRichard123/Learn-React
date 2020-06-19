import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Richard",
    };
    console.log("LifeCycleA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "RichardMe123",
    });
  };

  render() {
    console.log("LifeCycleA Render");
    return (
      <div className="lifecycleContainer">
        <h2>
          Open your console to see the order of execution of lifecycle methods
        </h2>
        <h3>Parent Component: LifeCycleA</h3>
        <button onClick={this.changeState} className="btn btn-info">
          Change State and trigger update
        </button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
