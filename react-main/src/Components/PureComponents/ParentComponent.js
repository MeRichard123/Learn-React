import React, { Component } from "react";
import RegularComponent from "./RegularComponent";
import PureComp from "./PureComp";
import MemoComponent from "./MemoComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Richard",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Richard",
      });
    }, 2000);
  }

  render() {
    console.log("*********Parent Component Render **********");
    return (
      <div className="purecomp-section">
        <h1 className="parentTitle">ParentComponent</h1>
        <MemoComponent name={this.state.name} />
        <RegularComponent name={this.state.name} />
        <PureComp name={this.state.name} />
        <p className="desc">
          Checking the console you should see that regardless of the settimeout
          the pure component only renders once. This allows for performance
          imporovements. The same way a class component will{" "}
          <code>extend PureComponent</code> to achieve this functionality. A
          functional component is exported as memo()
        </p>
        <div className="container">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Regular Component</th>
                <th scope="col">Pure Component</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  A Regular Component doesn't implement the
                  shouldComponentUpdate method. It always returns true by
                  default
                </td>
                <td>
                  A Pure Component on the other hand implements
                  shouldComponentUpdate with a shallow props and state
                  comparison. As will only rerender if a change in props or
                  state has happened. Pure components can give a performance
                  boots when redering lots of items.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ParentComponent;
