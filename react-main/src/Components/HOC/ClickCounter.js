import React, { Component } from "react";
import WithCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {/* adding this.props.name here won't work as it needs to be passed to the HOC */}
          {this.props.name} Clicked {count} times
        </button>
      </div>
    );
  }
}
// A bit like python decorators
export default WithCounter(ClickCounter, 5);
