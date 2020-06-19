import React, { Component } from "react";

class ClassEffect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    // Only update if the count changes not when you type in the input
    if (prevState.count !== this.state.count) {
      console.log("Updating Doc title");
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassEffect;
