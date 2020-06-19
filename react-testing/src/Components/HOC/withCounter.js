// Filename is a HOC convension

import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };
    render() {
      return (
        //   By Spreading the props here the decorated components have access to them
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
