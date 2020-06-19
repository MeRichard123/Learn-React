// When there is an error the whole UI crashed
// However we want only the erronous component to fall back into an error screen.
// We use boundaries

// See APP.JS to see how this is used

import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    // used to log errors
    // This is unneccesary in development as in development all errors are logged to console
    // In an onclick use try catch rather than a boundary
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
